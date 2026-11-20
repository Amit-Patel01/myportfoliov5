'use client'

import { useState, useEffect } from 'react'
import { Menu, X, FileText, Download, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import ThemeToggle from './ThemeToggle'

const GITHUB_PROJECTS_URL = 'https://github.com/amit-patel01?tab=repositories'
const RESUME_URL = 'https://drive.google.com/file/d/1JrO16wfcc1qUyRbJzVv6jEWlDPYvTO5W/view?usp=sharing'

const NAV_LINKS = [
  { name: 'About',        href: 'about' },
  { name: 'Skills',       href: 'skills' },
  { name: 'Projects',     href: GITHUB_PROJECTS_URL, external: true },
  { name: 'Experience',   href: 'journey' },
  { name: 'Certificates', href: 'certificates' },
  { name: 'Contact',      href: 'contact' },
]

const SOCIAL_LINKS = [
  { icon: FaGithub,       url: 'https://github.com/amit-patel01',           label: 'GitHub' },
  { icon: FaLinkedinIn,   url: 'https://www.linkedin.com/in/amit-patel01/', label: 'LinkedIn' },
  { icon: MdOutlineEmail, url: 'mailto:amitpatel07029@gmail.com',           label: 'Email' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const internalLinks = NAV_LINKS.filter(l => !l.external)
    const observers = internalLinks.map(({ href }) => {
      const el = document.getElementById(href)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 glass-nav transition-all duration-300 ${
      scrolled 
        ? 'shadow-lg shadow-sky-500/5 dark:shadow-sky-500/10 border-b border-slate-200/90 dark:border-slate-800/80' 
        : 'border-b border-slate-200/60 dark:border-slate-800/60'
    }`}>
      {/* Ambient Top Glow Beam */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[450px] h-8 bg-gradient-to-r from-transparent via-sky-400/15 dark:via-sky-400/20 to-transparent blur-xl pointer-events-none" />

      {/* Bottom Luminous Glowing Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/60 via-indigo-500/60 to-transparent pointer-events-none" />

      {/* Bottom Ambient Glow Halo */}
      <div className="absolute -bottom-2 left-1/4 right-1/4 h-[12px] bg-sky-400/20 dark:bg-sky-400/30 blur-md pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={() => { setActive('hero'); setIsOpen(false) }}
            className="flex flex-col group shrink-0"
          >
            <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              Amit Patel
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block -mt-0.5">
              Software Engineer
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200 inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={11} className="opacity-70" />
                  </a>
                ) : (
                  <a
                    href={`#${link.href}`}
                    onClick={() => setActive(link.href)}
                    className={`
                      px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200
                      ${active === link.href
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/25'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }
                    `}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-1.5">
              {SOCIAL_LINKS.map(social => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>

            {/* Modern Light / Dark Theme Switcher */}
            <ThemeToggle />

            {/* Prominent Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-600/30"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown (Full Width) */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl px-5 py-5 space-y-4 shadow-xl">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                ) : (
                  <a
                    href={`#${link.href}`}
                    onClick={() => {
                      setActive(link.href)
                      setIsOpen(false)
                    }}
                    className={`
                      block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
                      ${active === link.href
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                      }
                    `}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(social => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold"
            >
              <Download size={13} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
