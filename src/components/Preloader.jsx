'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import loaderVideo from '../assets/loding.mp4'

const Preloader = ({ onLoadingComplete }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Safety fallback timeout to ensure the user gets to the site even if video playback fails
    const fallbackTimer = setTimeout(() => {
      onLoadingComplete()
    }, 6500)

    // Try to force play in case of autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay was prevented, loading fallback triggered:", err)
      })
    }

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-[#050508] flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src={loaderVideo?.src || loaderVideo || '/assets/loding.mp4'}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        onEnded={onLoadingComplete}
      />
    </motion.div>
  )
}

export default Preloader
