'use client'

import { ExternalLink, Github, Award, Palette, Film, Trash2, Play } from 'lucide-react'

const PLAYABLE_VIDEO_PATTERN = /\.(mp4|webm|ogg|mov)(?:[?#].*)?$/i

const PortfolioCard = ({ item, onDelete, isCustom, onPreview }) => {
  const isProject = item.type === 'project' || !item.type
  const isCert = item.type === 'certificate'
  const isUIUX = item.type === 'uiux'
  const isVideo = item.type === 'video'

  const getBadgeInfo = () => {
    if (isCert) return { label: 'Certificate', icon: Award, bg: 'bg-amber-600/90' }
    if (isUIUX) return { label: 'UI/UX Design', icon: Palette, bg: 'bg-purple-600/90' }
    if (isVideo) return { label: 'Video Edit', icon: Film, bg: 'bg-rose-600/90' }
    return { label: 'Project', icon: Github, bg: 'bg-cyan-600/90' }
  }

  const badge = getBadgeInfo()
  const BadgeIcon = badge.icon
  const hasVideoPreview = isVideo && PLAYABLE_VIDEO_PATTERN.test(item.link || '')
  const showMedia = hasVideoPreview || Boolean(item.image)

  return (
    <div className="glass-card group h-full flex flex-col overflow-hidden">
      {/* Image Container */}
      {showMedia && (
        <div className="relative h-44 sm:h-48 overflow-hidden shrink-0 bg-slate-900">
        {hasVideoPreview ? (
          <video
            src={item.link}
            poster={item.image || undefined}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={e => {
              e.target.onerror = null
              e.target.closest('.group')?.querySelector('img')?.remove()
            }}
          />
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white ${badge.bg}`}>
            <BadgeIcon size={11} />
            {badge.label}
          </span>
        </div>

        {/* Delete Button (if custom/admin) */}
        {isCustom && onDelete && (
          <button
            onClick={e => { e.preventDefault(); e.stopPropagation(); onDelete(item.id) }}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-red-600/90 text-white hover:bg-red-500 transition-colors"
            title="Delete Item"
          >
            <Trash2 size={13} />
          </button>
        )}
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>
        </div>

        {isCert && (item.issuer || item.date) && (
          <p className="text-xs font-medium text-amber-400">
            {item.issuer}{item.issuer && item.date ? ' · ' : ''}{item.date}
          </p>
        )}

        <p className="text-xs text-slate-300 leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.tags?.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
          {isVideo && onPreview && item.link && item.link !== '#' ? (
            <button
              type="button"
              onClick={() => onPreview(item)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <Play size={13} fill="currentColor" />
              <span>Preview Video</span>
            </button>
          ) : item.link && item.link !== '#' && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink size={13} />
              <span>{isCert ? 'View Cert' : isUIUX ? 'View Prototype' : isVideo ? 'Watch Video' : 'Live Demo'}</span>
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
