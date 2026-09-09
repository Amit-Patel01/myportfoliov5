'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import logoImg from '../assets/logo.png'

const NAV_LINKS = [
  { name: 'Home',         href: 'hero' },
  { name: 'About',        href: 'about' },
  { name: 'Skills',       href: 'skills' },
  { name: 'Projects',     href: 'projects' },
  { name: 'Video',        href: 'video' },
  { name: 'Certificates', href: 'certificates' },
  { name: 'Contact',      href: 'contact' },
]

const SOCIAL_LINKS = [
  { icon: FaGithub,       url: 'https://github.com/amit-patel01',             label: 'GitHub' },
  { icon: FaLinkedinIn,   url: 'https://www.linkedin.com/in/amit-patel01/',   label: 'LinkedIn' },
  { icon: MdOutlineEmail, url: 'mailto:amitpatel07029@gmail.com',             label: 'Email' },
]

const RESUME_URL = 'https://drive.google.com/file/d/1JrO16wfcc1qUyRbJzVv6jEWlDPYvTO5W/view?usp=sharing'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = NAV_LINKS.map(({ href }) => {
      const el = document.getElementById(href)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href) },
        { rootMargin: '-35% 0px -55% 0px' }
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <nav className={`max-w-6xl mx-auto rounded-2xl glass-nav transition-all duration-300 ${scrolled ? 'shadow-lg shadow-cyan-950/20' : ''}`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">

          {/* Logo */}
          <a
            href="#hero"
            onClick={() => { setActive('hero'); setIsOpen(false) }}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="Amit Patel Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
              Amit<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={() => setActive(link.href)}
                  className={`
                    px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200
                    ${active === link.href
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-1.5">
              {SOCIAL_LINKS.map(social => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
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
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-all shadow-md shadow-cyan-900/30"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0d1322] rounded-b-2xl px-5 py-4 space-y-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={() => { setActive(link.href); setIsOpen(false) }}
                    className={`
                      block px-4 py-2 rounded-xl text-sm font-medium transition-colors
                      ${active === link.href
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-800/60'
                      }
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(social => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 text-white text-xs font-semibold"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
