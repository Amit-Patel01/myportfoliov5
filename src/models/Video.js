import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    type: { type: String, default: 'video' },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tags: { type: [String], default: [] },
    link: { type: String, default: '#' },
    color: { type: String, default: 'from-rose-500 to-red-600' },
  },
  { timestamps: true, collection: 'videos' }
)

export default mongoose.models.Video || mongoose.model('Video', VideoSchema)
