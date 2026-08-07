import mongoose from 'mongoose'

const PortfolioItemSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    type: { type: String, default: 'project' },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tags: { type: [String], default: [] },
    link: { type: String, default: '#' },
    github: { type: String, default: '' },
    issuer: { type: String, default: '' },
    date: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    color: { type: String, default: 'from-indigo-500 to-violet-600' },
  },
  { timestamps: true }
)

export default mongoose.models.PortfolioItem || mongoose.model('PortfolioItem', PortfolioItemSchema)
