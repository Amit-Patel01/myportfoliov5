'use client'

import { useEffect, useState } from 'react'

const BackgroundBlobs = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {/* Subtle Developer Dot Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25] transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          color: 'rgba(100, 116, 139, 0.4)',
        }}
      />

      {/* Floating Animated Blob 1 (Top Left / Cyan & Sky) */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-sky-400/35 via-cyan-300/30 to-blue-400/30 dark:from-sky-500/15 dark:via-cyan-500/12 dark:to-blue-600/10 blur-[110px] sm:blur-[130px] animate-blob-1" />

      {/* Floating Animated Blob 2 (Top Right / Indigo & Violet) */}
      <div className="absolute top-1/4 -right-32 w-[480px] h-[480px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-bl from-indigo-400/35 via-purple-300/30 to-blue-500/25 dark:from-indigo-600/18 dark:via-purple-600/15 dark:to-blue-700/10 blur-[110px] sm:blur-[130px] animate-blob-2" />

      {/* Floating Animated Blob 3 (Center Left / Purple & Fuchsia) */}
      <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tr from-purple-400/30 via-fuchsia-300/25 to-pink-400/20 dark:from-purple-600/15 dark:via-fuchsia-600/12 dark:to-indigo-600/10 blur-[100px] sm:blur-[120px] animate-blob-3" />

      {/* Floating Animated Blob 4 (Bottom Right / Emerald & Teal) */}
      <div className="absolute bottom-10 -right-20 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-tl from-emerald-400/30 via-teal-300/25 to-cyan-400/25 dark:from-emerald-500/15 dark:via-teal-500/12 dark:to-cyan-600/10 blur-[100px] sm:blur-[120px] animate-blob-1" />

      {/* Interactive Cursor Follow Glow Blob */}
      <div
        className="hidden md:block absolute w-[350px] h-[350px] rounded-full bg-sky-400/15 dark:bg-sky-500/10 blur-[90px] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x - 175}px, ${mousePos.y - 175}px, 0)`,
        }}
      />
    </div>
  )
}

export default BackgroundBlobs
