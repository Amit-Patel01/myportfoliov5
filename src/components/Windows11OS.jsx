'use client'

import { useState, useEffect } from 'react'
import {
  Home as HomeIcon,
  User,
  LayoutGrid,
  Briefcase,
  Code2,
  TrendingUp,
  Mail,
  Search,
  Power,
  Wifi,
  Volume2,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Award,
  Sun,
  Globe,
  ArrowUpRight,
  FileText,
  Grid,
  Terminal as TermIcon
} from 'lucide-react'

import WinWindow from './WinWindow'
import Projects from './Projects'
import UIUXSection from './UIUXSection'
import VideoSection from './VideoSection'
import CertificatesSection from './CertificatesSection'
import BentoGrid from './BentoGrid'
import Skills from './Skills'
import Contact from './Contact'
import AdminPanel from './AdminPanel'

/* Official Windows 11 Blue 4-Square Logo */
const Win11StartLogo = () => (
  <svg width="20" height="20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H41.6V41.6H0V0Z" fill="#0078d4"/>
    <path d="M46.4 0H88V41.6H46.4V0Z" fill="#0078d4"/>
    <path d="M0 46.4H41.6V88H0V46.4Z" fill="#0078d4"/>
    <path d="M46.4 46.4H88V88H46.4V46.4Z" fill="#0078d4"/>
  </svg>
)

/* Authentic App Icons */
const FileExplorerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
    <path d="M6 14C6 11.7909 7.79086 10 10 10H19L24 15H38C40.2091 15 42 16.7909 42 19V36C42 38.2091 40.2091 40 38 40H10C7.79086 40 6 38.2091 6 36V14Z" fill="#FFA000"/>
    <path d="M6 20C6 17.7909 7.79086 16 10 16H38C40.2091 16 42 17.7909 42 20V36C42 38.2091 40.2091 40 38 40H10C7.79086 40 6 38.2091 6 36V20Z" fill="#FFCA28"/>
    <path d="M12 22H36V34H12V22Z" fill="#0284C7" fillOpacity="0.8"/>
  </svg>
)

const EdgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
    <path d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C30.4 42 36 38.6 39.1 33.5C37.5 34.5 35.5 35 33.4 35C26 35 20 29 20 21.6C20 18 21.4 14.8 23.7 12.4C23.8 12.3 23.9 12.2 24 12.1" fill="url(#edgeGrad1)"/>
    <path d="M24 6C33.9411 6 42 14.0589 42 24C42 27.5 41 30.8 39.2 33.6C36.8 26.5 29.5 22 21.5 22C17.5 22 13.8 23.5 11 26C14 14 24 6 24 6Z" fill="url(#edgeGrad2)"/>
    <defs>
      <linearGradient id="edgeGrad1" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0C82EE"/>
        <stop offset="1" stopColor="#00C4B3"/>
      </linearGradient>
      <linearGradient id="edgeGrad2" x1="42" y1="6" x2="11" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4B3"/>
        <stop offset="1" stopColor="#35EC8F"/>
      </linearGradient>
    </defs>
  </svg>
)

const VSCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
    <path d="M37.5 4L22 18.5L12.5 11L6 14.5L18 24L6 33.5L12.5 37L22 29.5L37.5 44L42 41.5V6.5L37.5 4Z" fill="#007ACC"/>
  </svg>
)

const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
)

const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="5" fill="#1E293B" stroke="#475569" strokeWidth="1.5"/>
    <path d="M14 18L20 24L14 30" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 30H32" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="12" width="36" height="24" rx="4" fill="url(#mailGrad)"/>
    <path d="M6 14L24 26L42 14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
    <defs>
      <linearGradient id="mailGrad" x1="6" y1="12" x2="42" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7"/>
        <stop offset="1" stopColor="#2563EB"/>
      </linearGradient>
    </defs>
  </svg>
)

const APPS = [
  { id: 'projects', title: 'Projects Explorer', icon: FileExplorerIcon, pos: { x: 80, y: 40 } },
  { id: 'uiux', title: 'Services & UI/UX', icon: EdgeIcon, pos: { x: 120, y: 60 } },
  { id: 'skills', title: 'VS Code Skills', icon: VSCodeIcon, pos: { x: 160, y: 80 } },
  { id: 'video', title: 'Figma & Media', icon: FigmaIcon, pos: { x: 200, y: 100 } },
  { id: 'about', title: 'Terminal / About', icon: TerminalIcon, pos: { x: 90, y: 50 } },
  { id: 'certificates', title: 'Certificates.pdf', icon: Award, pos: { x: 130, y: 70 } },
  { id: 'contact', title: 'Mail App', icon: MailIcon, pos: { x: 170, y: 90 } },
]

const NAV_LINKS = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: LayoutGrid },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: TrendingUp },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const Windows11OS = ({ onSwitchToWebMode }) => {
  const [activeTab, setActiveTab] = useState('home')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [fullDate, setFullDate] = useState('')
  const [greeting, setGreeting] = useState('Good Afternoon')
  const [startOpen, setStartOpen] = useState(false)

  // Window Management States
  const [openWindows, setOpenWindows] = useState(['projects'])
  const [activeWindow, setActiveWindow] = useState('projects')
  const [minimizedWindows, setMinimizedWindows] = useState([])
  const [maximizedWindows, setMaximizedWindows] = useState([])
  const [windowZIndices, setWindowZIndices] = useState({ projects: 10 })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
      setDate(now.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' }))
      setFullDate(now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }))

      if (hours < 12) setGreeting('Good Morning')
      else if (hours < 18) setGreeting('Good Afternoon')
      else setGreeting('Good Evening')
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Window Controls
  const handleOpenApp = (id) => {
    setStartOpen(false)
    if (!openWindows.includes(id)) {
      setOpenWindows(prev => [...prev, id])
    }
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => prev.filter(w => w !== id))
    }
    handleFocusWindow(id)
  }

  const handleCloseWindow = (id) => {
    setOpenWindows(prev => prev.filter(w => w !== id))
    setMinimizedWindows(prev => prev.filter(w => w !== id))
    setMaximizedWindows(prev => prev.filter(w => w !== id))
  }

  const handleMinimizeWindow = (id) => {
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => [...prev, id])
    }
  }

  const handleMaximizeWindow = (id) => {
    if (maximizedWindows.includes(id)) {
      setMaximizedWindows(prev => prev.filter(w => w !== id))
    } else {
      setMaximizedWindows(prev => [...prev, id])
    }
  }

  const handleFocusWindow = (id) => {
    setActiveWindow(id)
    const highestZ = Math.max(0, ...Object.values(windowZIndices)) + 1
    setWindowZIndices(prev => ({ ...prev, [id]: highestZ }))
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#090d16] font-sans select-none text-slate-100">
      
      {/* ── Desktop Wallpaper Image ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qjXYaQqlERnwx-1aTVZ0tCdRdMbFH7Awgou-kVyENYGhaEw3oj-yLUPY&s=10')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px]" />
      </div>

      {/* ── Main Dashboard Layout Grid ── */}
      <div className="relative z-10 h-[calc(100vh-48px)] p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* ── LEFT FLOATING SIDEBAR ── */}
        <div className="lg:col-span-3 h-full rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-6">
            {/* User Branding Logo with GitHub Profile Photo */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
              <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://github.com/Amit-Patel01.png"
                    alt="Amit Patel"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.onerror = null
                      e.target.src = '/assets/profile.jpeg'
                    }}
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden flex items-center justify-center shadow-md">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-0.5" />
                </div>
              </div>
              <div>
                <h2 className="font-extrabold text-white text-base leading-tight">Amit Patel</h2>
                <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Founder | Developer | Problem Solver</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon
                const isActive = activeTab === link.id

                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveTab(link.id)
                      handleOpenApp(link.id === 'home' ? 'projects' : link.id)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-cyan-400' : 'text-slate-400'} />
                    <span>{link.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Social Icons & Copyright */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: 'https://github.com/amit-patel01', title: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/amit-patel01/', title: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', title: 'Twitter' },
                { icon: Instagram, href: 'https://www.instagram.com/amiitt_4084', title: 'Instagram' },
              ].map(({ icon: Icon, href, title }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={title}
                  className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all flex items-center justify-center"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <div>
              <p className="text-[10px] font-semibold text-slate-400">© 2025 Amit Solution Hub</p>
              <p className="text-[10px] text-slate-500">All rights reserved.</p>
            </div>
          </div>

        </div>

        {/* ── CENTER MAIN WINDOW CARD (HERO / HOME) ── */}
        <div className="lg:col-span-6 h-full flex items-center justify-center overflow-y-auto">
          {activeTab === 'home' ? (
            <div className="w-full max-w-xl rounded-3xl bg-slate-900/90 backdrop-blur-3xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.6)] p-8 sm:p-10 space-y-6 text-slate-100">
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  👋 Welcome
                </span>

                <button
                  onClick={() => handleOpenApp('services')}
                  className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center shadow-xs hover:bg-slate-700 transition-all"
                >
                  <LayoutGrid size={16} />
                </button>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Hi, I'm <span className="gradient-text-cyan">Amit Patel</span>
                </h1>
                <p className="text-sm font-bold text-slate-300">
                  Full Stack Developer & Tech Entrepreneur
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-medium pt-1">
                  I build modern web experiences and scalable solutions that help businesses grow.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenApp('projects')}
                  className="px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
                >
                  <span>Open Projects Window</span>
                  <ArrowUpRight size={15} />
                </button>

                <button
                  onClick={() => handleOpenApp('contact')}
                  className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 shadow-xs transition-all hover:scale-105"
                >
                  <span>Contact Me</span>
                  <Mail size={15} className="text-slate-400" />
                </button>
              </div>

            </div>
          ) : (
            <div className="w-full h-full rounded-3xl bg-slate-900/90 backdrop-blur-3xl border border-white/10 shadow-2xl p-6 overflow-y-auto text-slate-100">
              {activeTab === 'about' && <BentoGrid />}
              {activeTab === 'services' && <UIUXSection />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'skills' && <Skills />}
              {activeTab === 'experience' && <VideoSection />}
              {activeTab === 'certificates' && <CertificatesSection />}
              {activeTab === 'contact' && <Contact />}
            </div>
          )}
        </div>

        {/* ── RIGHT FLOATING WIDGETS ── */}
        <div className="lg:col-span-3 h-full flex flex-col gap-6 overflow-y-auto">
          
          <div className="rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 space-y-2 text-slate-100">
            <p className="text-xs font-semibold text-slate-400">{fullDate}</p>
            <p className="text-4xl font-black text-white tracking-tight">{time}</p>
            <p className="text-xs font-bold text-slate-300">{greeting}, Amit!</p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 pt-1">
              <Sun size={15} className="text-amber-400" />
              <span>28°C Gujarat, IN</span>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 space-y-3 text-slate-100 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe size={15} className="text-cyan-400" />
                <h3 className="font-bold text-xs text-white uppercase tracking-wider">Quick Links</h3>
              </div>

              <div className="space-y-1.5">
                {[
                  { label: 'Resume', icon: FileText, app: 'about' },
                  { label: 'Certificates', icon: Award, app: 'certificates' },
                  { label: 'GitHub', icon: Github, href: 'https://github.com/amit-patel01' },
                  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/@amitpatel-uc7up' },
                  { label: 'Email Me', icon: Mail, app: 'contact' },
                ].map((item) => {
                  const Icon = item.icon
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-800 transition-colors text-xs font-bold text-slate-300 hover:text-cyan-400"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} className="text-slate-400" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-slate-500" />
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => handleOpenApp(item.app)}
                      className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-800 transition-colors text-xs font-bold text-slate-300 hover:text-cyan-400"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} className="text-slate-400" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-slate-500" />
                    </button>
                  )
                })}
              </div>
            </div>

            <button
              onClick={onSwitchToWebMode}
              className="w-full py-2.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-600/20 mt-2"
            >
              <Globe size={14} />
              <span>Classic Web View</span>
            </button>

          </div>

        </div>

      </div>

      {/* ── DRAGGABLE FLOATING APP WINDOWS (WITH MINIMIZE, MAXIMIZE & CLOSE CONTROLS) ── */}
      {APPS.map((app) => {
        const isOpen = openWindows.includes(app.id)
        const isMin = minimizedWindows.includes(app.id)
        const isMax = maximizedWindows.includes(app.id)
        const zIdx = windowZIndices[app.id] || 1

        return (
          <WinWindow
            key={app.id}
            id={app.id}
            title={app.title}
            icon={app.icon}
            isOpen={isOpen}
            isMinimized={isMin}
            isMaximized={isMax}
            zIndex={zIdx}
            initialPos={app.pos}
            onClose={handleCloseWindow}
            onMinimize={handleMinimizeWindow}
            onMaximize={handleMaximizeWindow}
            onFocus={() => handleFocusWindow(app.id)}
          >
            {app.id === 'projects' && <Projects />}
            {app.id === 'uiux' && <UIUXSection />}
            {app.id === 'skills' && <Skills />}
            {app.id === 'video' && <VideoSection />}
            {app.id === 'about' && <BentoGrid />}
            {app.id === 'certificates' && <CertificatesSection />}
            {app.id === 'contact' && <Contact />}
          </WinWindow>
        )
      })}

      {/* ── Windows 11 Start Menu Popup ── */}
      {startOpen && (
        <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 space-y-4 text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-white">Pinned Apps</span>
            <span className="text-[11px] text-cyan-400">All Apps &gt;</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {APPS.map((app) => {
              const Icon = app.icon
              return (
                <button
                  key={app.id}
                  onClick={() => handleOpenApp(app.id)}
                  className="flex flex-col items-center p-2 rounded-xl hover:bg-slate-800 transition-colors text-center group"
                >
                  <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-300 mt-1 truncate w-full">
                    {app.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── FULLY FUNCTIONAL WINDOWS 11 TASKBAR DOCK ── */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] h-12 bg-slate-950/90 backdrop-blur-2xl border-t border-white/10 px-4 flex items-center justify-between text-slate-200 shadow-md">
        
        {/* Left Weather Widget */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-white/10 cursor-pointer text-xs font-semibold">
          <Sun size={16} className="text-amber-400" />
          <span className="hidden sm:inline">28°C Gujarat, IN</span>
        </div>

        {/* Center Taskbar App Dock */}
        <div className="flex items-center gap-2 mx-auto">
          
          {/* Windows 11 Start Logo */}
          <button
            onClick={() => setStartOpen(s => !s)}
            className={`p-2 rounded-xl transition-all ${
              startOpen ? 'bg-white/15 border border-white/20' : 'hover:bg-white/10'
            }`}
            title="Start Menu"
          >
            <Win11StartLogo />
          </button>

          {/* Taskbar App Shortcut Buttons (WITH ACTIVE / MINIMIZED CONTROL) */}
          {APPS.map((app) => {
            const Icon = app.icon
            const isOpen = openWindows.includes(app.id)
            const isMin = minimizedWindows.includes(app.id)
            const isActive = activeWindow === app.id && !isMin

            return (
              <button
                key={app.id}
                onClick={() => {
                  if (isOpen && isActive) {
                    handleMinimizeWindow(app.id)
                  } else {
                    handleOpenApp(app.id)
                  }
                }}
                className={`relative p-2 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white/15 border border-white/20'
                    : isOpen
                    ? 'bg-white/5'
                    : 'hover:bg-white/10'
                }`}
                title={app.title}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Icon />
                </div>
                {isOpen && (
                  <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 rounded-full ${
                    isActive ? 'w-4 bg-cyan-400' : 'w-1.5 bg-slate-500'
                  }`} />
                )}
              </button>
            )
          })}

        </div>

        {/* Right System Tray */}
        <div className="flex items-center gap-3 text-slate-200 text-xs font-semibold">
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <Volume2 size={14} />
            <Wifi size={14} />
          </div>

          <div className="text-right border-l border-slate-800 pl-3">
            <p className="leading-tight text-white">{time}</p>
            <p className="text-[10px] text-slate-400 leading-tight">{date}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Windows11OS
