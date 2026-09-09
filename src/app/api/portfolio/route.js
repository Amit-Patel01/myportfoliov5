import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectToDatabase } from '../../../lib/mongodb'
import Project from '../../../models/Project'
import Certificate from '../../../models/Certificate'
import UIUX from '../../../models/UIUX'
import Video from '../../../models/Video'
import PortfolioItem from '../../../models/PortfolioItem'

export const dynamic = 'force-dynamic'

// Helper to select model by item type
function getModelByType(type) {
  if (type === 'certificate') return Certificate
  if (type === 'uiux') return UIUX
  if (type === 'video') return Video
  return Project
}

// Normalize items so they always have both `id` and `_id` as string
function normalizeItem(doc) {
  if (!doc) return doc
  const idStr = doc.id || (doc._id ? doc._id.toString() : 'item_' + Date.now())
  return {
    ...doc,
    _id: doc._id ? doc._id.toString() : idStr,
    id: idStr,
  }
}

// Build query to match custom string `id` or MongoDB `_id`
function buildIdQuery(id) {
  const conditions = [{ id: id }, { _id: id }]
  if (mongoose.Types.ObjectId.isValid(id)) {
    conditions.push({ _id: new mongoose.Types.ObjectId(id) })
  }
  return { $or: conditions }
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
    ...projects.map(p => normalizeItem({ ...p, type: p.type || 'project' })),
    ...certs.map(c => normalizeItem({ ...c, type: c.type || 'certificate' })),
    ...uiuxs.map(u => normalizeItem({ ...u, type: u.type || 'uiux' })),
    ...videos.map(v => normalizeItem({ ...v, type: v.type || 'video' })),
    ...legacy.map(l => normalizeItem(l)),
  ]

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
    console.error('MongoDB GET failed:', error.message)
    return NextResponse.json({ success: false, source: 'mongodb', error: 'MongoDB connection failed.' }, { status: 503 })
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
      image: body.image || '',
      tags: Array.isArray(body.tags) ? body.tags : (body.tags ? body.tags.split(',').map(t => t.trim()) : []),
      link: body.link || '',
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
        item: normalizeItem(created.toObject ? created.toObject() : created),
        items: allItems,
      }, { status: 201 })
    } catch (dbErr) {
      console.error('MongoDB POST failed:', dbErr.message)
      return NextResponse.json({ success: false, source: 'mongodb', error: 'MongoDB connection failed.' }, { status: 503 })
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
      const query = buildIdQuery(id)
      const TargetModel = getModelByType(updates.type)

      // Search for the existing document across all models
      let existingDoc = null
      let FoundModel = null

      for (const M of [Project, Certificate, UIUX, Video, PortfolioItem]) {
        const found = await M.findOne(query).lean()
        if (found) {
          existingDoc = found
          FoundModel = M
          break
        }
      }

      let updated = null
      if (existingDoc && FoundModel) {
        if (TargetModel !== FoundModel) {
          // If type changed collection, delete old and create in target collection
          await FoundModel.deleteOne(query)
          const newDoc = {
            ...existingDoc,
            ...updates,
            id: existingDoc.id || id,
          }
          delete newDoc._id
          updated = await TargetModel.create(newDoc)
        } else {
          // Update in existing model
          updated = await FoundModel.findOneAndUpdate(query, updates, { new: true }).lean()
        }
      } else {
        // Fallback create
        updated = await TargetModel.create({ ...updates, id }).catch(() => null)
      }

      const allItems = await getAllMongoItems()
      return NextResponse.json({
        success: true,
        source: 'mongodb',
        message: 'Item updated in MongoDB',
        item: normalizeItem(updated),
        items: allItems,
      })
    } catch (dbErr) {
      console.error('MongoDB PUT failed:', dbErr.message)
      return NextResponse.json({ success: false, source: 'mongodb', error: 'MongoDB connection failed.' }, { status: 503 })
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

      const query = buildIdQuery(id)

      // Delete across all collections matching either id or _id
      await Promise.all([
        Project.deleteOne(query),
        Certificate.deleteOne(query),
        UIUX.deleteOne(query),
        Video.deleteOne(query),
        PortfolioItem.deleteOne(query),
      ])

      const allItems = await getAllMongoItems()
      return NextResponse.json({
        success: true,
        source: 'mongodb',
        message: 'Item deleted from MongoDB collection',
        items: allItems,
      })
    } catch (dbErr) {
      console.error('MongoDB DELETE failed:', dbErr.message)
      return NextResponse.json({ success: false, source: 'mongodb', error: 'MongoDB connection failed.' }, { status: 503 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

