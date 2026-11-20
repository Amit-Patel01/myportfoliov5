'use client'

import { ExternalLink, Award, Palette, Film, Trash2, Play, Code2, Globe } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const PLAYABLE_VIDEO_PATTERN = /\.(mp4|webm|ogg|mov)(?:[?#].*)?$/i

const PortfolioCard = ({ item, onDelete, isCustom, onPreview }) => {
  const isProject = item.type === 'project' || !item.type
  const isCert = item.type === 'certificate'
  const isUIUX = item.type === 'uiux'
  const isVideo = item.type === 'video'

  const getBadgeInfo = () => {
    if (isCert) return { label: 'Certificate', icon: Award, bg: 'bg-emerald-600 text-white' }
    if (isUIUX) return { label: 'UI/UX Design', icon: Palette, bg: 'bg-purple-600 text-white' }
    if (isVideo) return { label: 'Video Edit', icon: Film, bg: 'bg-rose-600 text-white' }
    return { label: 'Software Project', icon: Code2, bg: 'bg-sky-600 text-white' }
  }

  const badge = getBadgeInfo()
  const BadgeIcon = badge.icon
  const hasVideoPreview = isVideo && PLAYABLE_VIDEO_PATTERN.test(item.link || '')
  const hasImage = Boolean(item.image)

  return (
    <div className="glass-card group h-full flex flex-col overflow-hidden transition-all duration-300">
      
      {/* Visual Header / Media */}
      <div className="relative h-44 sm:h-48 overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center border-b border-slate-200/80 dark:border-slate-800">
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
        ) : hasImage ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={e => {
              e.target.onerror = null
              e.target.style.display = 'none'
            }}
          />
        ) : (
          /* Sleek fallback graphic for code repositories */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950">
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2 shadow-sm">
              <Code2 size={24} />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">&lt;Production Code /&gt;</span>
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-md ${badge.bg}`}>
            <BadgeIcon size={12} />
            {badge.label}
          </span>
        </div>

        {/* Delete Button (if admin) */}
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

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-3">
        <div className="space-y-1">
          <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
            {item.title}
          </h3>

          {isCert && (item.issuer || item.date) && (
            <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              {item.issuer}{item.issuer && item.date ? ' &bull; ' : ''}{item.date}
            </p>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 line-clamp-3">
          {item.description || 'Open-source software project engineered with clean architecture.'}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.tags?.slice(0, 5).map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
            >
              {tag}
            </span>
          ))}
          {item.tags?.length > 5 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
              +{item.tags.length - 5}
            </span>
          )}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-200/90 dark:border-slate-800/80 mt-auto">
          {isVideo && onPreview && item.link && item.link !== '#' ? (
            <button
              type="button"
              onClick={() => onPreview(item)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              <Play size={13} fill="currentColor" />
              <span>Watch Video</span>
            </button>
          ) : item.link && item.link !== '#' && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              <Globe size={13} />
              <span>{isCert ? 'Verify Credential' : isUIUX ? 'Open Prototype' : isVideo ? 'Watch Video' : 'Live Demo'}</span>
              <ExternalLink size={11} className="opacity-70" />
            </a>
          )}

          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors ml-auto"
            >
              <FaGithub size={14} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
