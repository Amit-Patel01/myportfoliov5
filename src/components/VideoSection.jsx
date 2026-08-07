'use client'

import { Film, Loader2 } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const VideoSection = () => {
  const { items, loading } = usePortfolio()
  const videoItems = items.filter(item => item.type === 'video')

  return (
    <section id="video" className="section-container">
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <Film size={13} />
          Media & Video Editing
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Video Editing & <span className="text-rose-400">Cinematic Content</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-400">
          Commercial edits, motion graphics, and video production created with Premiere Pro & After Effects.
        </p>
      </div>

      {loading && (
        <div className="py-12 text-center text-slate-400">
          <Loader2 size={28} className="animate-spin mx-auto mb-2 text-rose-400" />
          Loading video edits…
        </div>
      )}

      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoItems.length > 0 ? (
            videoItems.map((item, i) => (
              <PortfolioCard key={item.id || i} item={item} index={i} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <div className="inline-block p-6 glass-card max-w-sm mx-auto space-y-3">
                <Film size={32} className="mx-auto text-slate-500" />
                <p className="text-sm text-slate-400">No video edit items added yet. You can add them from Admin Panel.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default VideoSection
