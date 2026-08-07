'use client'

/**
 * Consistent section heading component
 */
const SectionHeading = ({
  badge,
  badgeClass = 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
  title,
  highlight,
  highlightClass = 'from-cyan-400 to-indigo-400',
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} mb-10 sm:mb-14 space-y-3`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${badgeClass}`}
        >
          {badge}
        </span>
      )}

      <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className={`bg-gradient-to-r ${highlightClass} bg-clip-text text-transparent`}>
            {highlight}
          </span>
        )}
      </h2>

      <div
        className={`h-1 w-16 rounded-full bg-gradient-to-r ${highlightClass} ${
          isCenter ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p className={`max-w-xl ${isCenter ? 'mx-auto' : ''} text-sm sm:text-base text-slate-400`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
