import { NextResponse } from 'next/server'
import initialPortfolioData from '../../../data/portfolio.json'
import { connectToDatabase } from '../../../lib/mongodb'
import Project from '../../../models/Project'
import Certificate from '../../../models/Certificate'
import UIUX from '../../../models/UIUX'
import Video from '../../../models/Video'
import PortfolioItem from '../../../models/PortfolioItem'

export const dynamic = 'force-dynamic'

let fallbackMemoryItems = [...(initialPortfolioData.items || [])]

// Helper to select model by item type
function getModelByType(type) {
  if (type === 'certificate') return Certificate
  if (type === 'uiux') return UIUX
  if (type === 'video') return Video
  return Project
}

// Fetch all items from separate collections
async function getAllMongoItems() {
  await connectToDatabase()

  const [projects, certs, uiuxs, videos, legacy] = await Promise.all([
    Project.find({}).sort({ createdAt: -1 }).lean(),
    Certificate.find({}).sort({ createdAt: -1 }).lean(),
    UIUX.find({}).sort({ createdAt: -1 }).lean(),
    Video.find({}).sort({ createdAt: -1 }).lean(),
    PortfolioItem.find({}).sort({ createdAt: -1 }).lean().catch(() => []),
  ])

  let combined = [
    ...projects.map(p => ({ ...p, type: 'project' })),
    ...certs.map(c => ({ ...c, type: 'certificate' })),
    ...uiuxs.map(u => ({ ...u, type: 'uiux' })),
    ...videos.map(v => ({ ...v, type: 'video' })),
    ...legacy,
  ]

  // Auto-seed into separate collections if completely empty
  if (combined.length === 0) {
    const defaults = initialPortfolioData.items || []
    for (const item of defaults) {
      const Model = getModelByType(item.type)
      await Model.create(item).catch(() => {})
    }
    const [p2, c2, u2, v2] = await Promise.all([
      Project.find({}).lean(),
      Certificate.find({}).lean(),
      UIUX.find({}).lean(),
      Video.find({}).lean(),
    ])
    combined = [
      ...p2.map(p => ({ ...p, type: 'project' })),
      ...c2.map(c => ({ ...c, type: 'certificate' })),
      ...u2.map(u => ({ ...u, type: 'uiux' })),
      ...v2.map(v => ({ ...v, type: 'video' })),
    ]
  }

  return combined
}

export async function GET() {
  try {
    const items = await getAllMongoItems()
    return NextResponse.json({
      success: true,
      source: 'mongodb',
      items,
    })
  } catch (error) {
    console.warn('MongoDB GET fallback to memory:', error.message)
    return NextResponse.json({
      success: true,
      source: 'memory',
      items: fallbackMemoryItems,
    })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const itemType = body.type || 'project'
    const newItem = {
      id: body.id || 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      type: itemType,
      title: body.title || 'Untitled',
      description: body.description || '',
      image: body.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
      tags: Array.isArray(body.tags) ? body.tags : (body.tags ? body.tags.split(',').map(t => t.trim()) : []),
      link: body.link || '#',
      github: body.github || '',
      issuer: body.issuer || '',
      date: body.date || '',
      featured: Boolean(body.featured),
      color: body.color || 'from-cyan-500 to-blue-600',
    }

    try {
      await connectToDatabase()
      const Model = getModelByType(itemType)
      const created = await Model.create(newItem)
      const allItems = await getAllMongoItems()
      return NextResponse.json({
        success: true,
        source: 'mongodb',
        message: `Saved to separate collection '${Model.collection.name}' in MongoDB`,
        item: created,
        items: allItems,
      }, { status: 201 })
    } catch (dbErr) {
      console.warn('MongoDB POST fallback to memory:', dbErr.message)
      fallbackMemoryItems.unshift(newItem)
      return NextResponse.json({
        success: true,
        source: 'memory',
        message: 'Saved to memory',
        item: newItem,
        items: fallbackMemoryItems,
      }, { status: 201 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

export async function PUT(request) {
  try {
    const body = await request.json()
    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json({ success: false, error: 'Item ID is required' }, { status: 400 })
    }

    try {
      await connectToDatabase()
      const Model = getModelByType(updates.type)
      
      // Try updating across separate collections
      let updated = await Model.findOneAndUpdate({ id }, updates, { new: true }).lean()
      if (!updated) {
        // Fallback search across all models
        for (const M of [Project, Certificate, UIUX, Video, PortfolioItem]) {
          updated = await M.findOneAndUpdate({ id }, updates, { new: true }).lean()
          if (updated) break
        }
      }

      const allItems = await getAllMongoItems()
      return NextResponse.json({
        success: true,
        source: 'mongodb',
        message: 'Item updated in MongoDB',
        item: updated,
        items: allItems,
      })
    } catch (dbErr) {
      console.warn('MongoDB PUT fallback to memory:', dbErr.message)
      const index = fallbackMemoryItems.findIndex(i => i.id === id)
      if (index !== -1) {
        fallbackMemoryItems[index] = { ...fallbackMemoryItems[index], ...updates }
      }
      return NextResponse.json({
        success: true,
        source: 'memory',
        message: 'Item updated in memory',
        items: fallbackMemoryItems,
      })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const all = searchParams.get('all')

    try {
      await connectToDatabase()
      if (all === 'true' || id === 'all') {
        await Promise.all([
          Project.deleteMany({}),
          Certificate.deleteMany({}),
          UIUX.deleteMany({}),
          Video.deleteMany({}),
          PortfolioItem.deleteMany({}),
        ])
        return NextResponse.json({
          success: true,
          source: 'mongodb',
          message: 'All items deleted from all collections in MongoDB',
          items: [],
        })
      }

      if (!id) {
        return NextResponse.json({ success: false, error: 'Item ID is required' }, { status: 400 })
      }

      // Delete across all collections
      await Promise.all([
        Project.deleteOne({ id }),
        Certificate.deleteOne({ id }),
        UIUX.deleteOne({ id }),
        Video.deleteOne({ id }),
        PortfolioItem.deleteOne({ id }),
      ])

      const allItems = await getAllMongoItems()
      return NextResponse.json({
        success: true,
        source: 'mongodb',
        message: 'Item deleted from MongoDB collection',
        items: allItems,
      })
    } catch (dbErr) {
      console.warn('MongoDB DELETE fallback to memory:', dbErr.message)
      if (all === 'true' || id === 'all') {
        fallbackMemoryItems = []
      } else if (id) {
        fallbackMemoryItems = fallbackMemoryItems.filter(i => i.id !== id)
      }
      return NextResponse.json({
        success: true,
        source: 'memory',
        message: 'Deleted from memory',
        items: fallbackMemoryItems,
      })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}
