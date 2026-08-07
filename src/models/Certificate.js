import mongoose from 'mongoose'

const CertificateSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    type: { type: String, default: 'certificate' },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tags: { type: [String], default: [] },
    link: { type: String, default: '#' },
    issuer: { type: String, default: '' },
    date: { type: String, default: '' },
    color: { type: String, default: 'from-amber-500 to-orange-600' },
  },
  { timestamps: true, collection: 'certificates' }
)

export default mongoose.models.Certificate || mongoose.model('Certificate', CertificateSchema)
