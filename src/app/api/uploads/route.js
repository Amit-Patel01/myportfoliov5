import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'

const UPLOAD_FOLDERS = {
  certificates: 'certificates',
  videos: 'videos',
  thumbnails: 'thumbnails',
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const folder = searchParams.get('folder')
  const safeFolder = UPLOAD_FOLDERS[folder]

  if (!safeFolder) {
    return NextResponse.json({ error: 'Unknown upload folder.' }, { status: 400 })
  }

  try {
    const directory = path.join(process.cwd(), 'public', 'uploads', safeFolder)
    const entries = await readdir(directory, { withFileTypes: true })
    const files = entries
      .filter(entry => entry.isFile() && !entry.name.startsWith('.'))
      .map(entry => ({
        name: entry.name,
        path: `/uploads/${safeFolder}/${encodeURIComponent(entry.name)}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    return NextResponse.json({ files })
  } catch (error) {
    console.error('Upload folder read failed:', error.message)
    return NextResponse.json({ error: 'Could not read upload folder.' }, { status: 500 })
  }
}
