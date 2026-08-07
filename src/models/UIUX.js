import mongoose from 'mongoose'

const UIUXSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    type: { type: String, default: 'uiux' },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tags: { type: [String], default: [] },
    link: { type: String, default: '#' },
    color: { type: String, default: 'from-purple-500 to-pink-600' },
  },
  { timestamps: true, collection: 'uiuxs' }
)

export default mongoose.models.UIUX || mongoose.model('UIUX', UIUXSchema)
