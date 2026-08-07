import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="glass-card p-8 max-w-md space-y-4">
        <h1 className="text-6xl font-extrabold text-cyan-400">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-sm text-slate-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all"
        >
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </div>
    </div>
  )
}
