'use client'

/**
 * Clean wrapper component without motion animation overhead
 */
const Reveal = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>
}

export default Reveal
