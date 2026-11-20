'use client'

import { useState } from 'react'
import { Palette, Film, X, Play } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import defaultPortfolioData from '../data/portfolio.json'
import { usePortfolio } from '../hooks/usePortfolio'

const YOUTUBE_PATTERN = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/

const VideoPreviewModal = ({ item, onClose }) => {
  if (!item) return null
  const youtubeMatch = item.link?.match(YOUTUBE_PATTERN)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Video preview: ${item.title}`}
      onClick={onClose}
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#090d16] shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
          <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="Close video preview">
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

const CreativeSection = () => {
  const { items: contextItems } = usePortfolio()
  const [filter, setFilter] = useState('All')
  const [previewItem, setPreviewItem] = useState(null)

  // Curated fallback
  const fallbackCreative = (defaultPortfolioData.items || []).filter(item => item.type === 'uiux' || item.type === 'video')
  const rawItems = contextItems?.filter(item => item.type === 'uiux' || item.type === 'video')
  const creativeItems = (rawItems && rawItems.length > 0) ? rawItems : fallbackCreative

  const filtered = creativeItems.filter(item => {
    if (filter === 'UI/UX') return item.type === 'uiux'
    if (filter === 'Video') return item.type === 'video'
    return true
  })

  if (creativeItems.length === 0) return null

  return (
    <section id="creative" className="section-container">
      
      {/* Section Header */}
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 shadow-sm">
          <Palette size={13} />
          Creative &amp; Design Skills
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          UI/UX &amp; <span className="gradient-text">Multimedia Work</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
          Interactive Figma prototypes, design systems, and digital media production showcasing creative versatility.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-2 mb-10">
        {['All', 'UI/UX', 'Video'].map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
              filter === tab
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 shadow-sm'
            }`}
          >
            {tab === 'All' ? 'All Creative' : tab === 'UI/UX' ? 'UI/UX Designs' : 'Video Edits'}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((item, i) => (
          <PortfolioCard key={item.id || i} item={item} index={i} onPreview={setPreviewItem} />
        ))}
      </div>

      <VideoPreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </section>
  )
}

export default CreativeSection
