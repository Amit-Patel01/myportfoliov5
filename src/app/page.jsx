'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import Journey from '../components/Journey'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import UIUXSection from '../components/UIUXSection'
import VideoSection from '../components/VideoSection'
import CertificatesSection from '../components/CertificatesSection'
import Contact from '../components/Contact'
import Windows11OS from '../components/Windows11OS'
import { ScrollToTop } from '../components/ScrollToTop'
import { Monitor } from 'lucide-react'

export default function Home() {
  const [isOSMode, setIsOSMode] = useState(true)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [isOSMode])

  if (isOSMode) {
    return <Windows11OS onSwitchToWebMode={() => setIsOSMode(false)} />
  }

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/30">
      {/* Ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* Mode Switcher floating button */}
      <button
        onClick={() => setIsOSMode(true)}
        className="fixed bottom-6 left-6 z-50 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-950/50 flex items-center gap-2 transition-all hover:scale-105"
        title="Switch to Windows 11 Desktop Mode (v5)"
      >
        <Monitor size={16} />
        <span>Windows 11 OS Mode</span>
      </button>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-12">
          <Hero />
          <BentoGrid />
          <Journey />
          <Skills />
          <Projects />
          <UIUXSection />
          <VideoSection />
          <CertificatesSection />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 bg-[#070a12] py-8 text-center text-sm text-slate-400">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Amit Patel. All rights reserved.</p>
            <p className="text-xs text-slate-500">Built with Next.js, Tailwind CSS, Windows 11 OS UI & MongoDB</p>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </div>
  )
}
