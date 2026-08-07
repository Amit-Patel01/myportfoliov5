import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    type: { type: String, default: 'project' },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tags: { type: [String], default: [] },
    link: { type: String, default: '#' },
    github: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    color: { type: String, default: 'from-cyan-500 to-blue-600' },
  },
  { timestamps: true, collection: 'projects' }
)

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
