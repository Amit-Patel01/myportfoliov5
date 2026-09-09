'use client'

import { useState } from 'react'
import { Film, Loader2, X } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const YOUTUBE_PATTERN = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/

const VideoPreviewModal = ({ item, onClose }) => {
  if (!item) return null
  const youtubeMatch = item.link?.match(YOUTUBE_PATTERN)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Video preview: ${item.title}`}
      onClick={onClose}
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-[#0b0f19] shadow-2xl" onClick={event => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3">
          <h3 className="truncate text-sm font-bold text-white">{item.title}</h3>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white" aria-label="Close video preview">
            <X size={18} />
          </button>
        </div>
        <div className="aspect-video bg-black">
          {youtubeMatch ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`}
              title={item.title}
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={item.link} poster={item.image || undefined} controls autoPlay playsInline className="h-full w-full object-contain" />
          )}
        </div>
      </div>
    </div>
  )
}

const VideoSection = () => {
  const { items, loading } = usePortfolio()
  const videoItems = items.filter(item => item.type === 'video')
  const [previewItem, setPreviewItem] = useState(null)

  return (
    <section id="video" className="section-container">
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
              <PortfolioCard key={item.id || i} item={item} index={i} onPreview={setPreviewItem} />
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

      <VideoPreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </section>
  )
}

export default VideoSection
