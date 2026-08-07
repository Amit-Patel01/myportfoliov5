import { useRef, useState, useCallback } from 'react'

/**
 * Magnetic hover effect: the element (and optionally its inner content)
 * eases toward the cursor, then springs back on leave.
 *
 * Returns a ref, the inline transform style and pointer handlers.
 */
export const useMagnetic = (strength = 0.35, innerStrength = 0.15) => {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      setStyle({
        transform: `translate3d(${x * strength}px, ${y * strength}px, 0)`,
        '--mx': `${x * innerStrength}px`,
        '--my': `${y * innerStrength}px`,
      })
    },
    [strength, innerStrength]
  )

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'translate3d(0,0,0)' })
  }, [])

  return { ref, style, onMouseMove, onMouseLeave }
}
