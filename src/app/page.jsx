'use client'

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Journey from '../components/Journey'
import CertificatesSection from '../components/CertificatesSection'
import Contact from '../components/Contact'
import BackgroundBlobs from '../components/BackgroundBlobs'
import { ScrollToTop } from '../components/ScrollToTop'

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-sky-500/20 selection:text-sky-900 dark:selection:bg-sky-500/30 dark:selection:text-white transition-colors duration-300">
      
      {/* Modern Animated Glowing Blobs & Tech Grid Background */}
      <BackgroundBlobs />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col gap-6 sm:gap-10">
          <Hero />
          <BentoGrid />
          <Skills />
          <Projects />
          <Journey />
          <CertificatesSection />
          <Contact />
        </main>

        {/* Clean Corporate Footer */}
        <footer className="border-t border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-[#070a12] py-8 text-sm text-slate-600 dark:text-slate-400 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight">Amit Patel</span>
              <span className="text-slate-400 dark:text-slate-600">&bull;</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">Full Stack Developer &amp; Software Engineer</span>
            </div>

            <p className="text-xs text-slate-500 text-center sm:text-right">
              &copy; {new Date().getFullYear()} Amit Patel. All rights reserved.
            </p>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </div>
  )
}
