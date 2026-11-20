'use client'

import { ArrowRight, FileText, CheckCircle2, Code2, Layers, Database, Sparkles, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.jpeg'

const ROLES = [
  'Full Stack Developer',
  'Software Engineer',
  'React & Next.js Specialist',
  'Node.js & API Engineer',
  'B.Tech IT @ Parul University',
]

const KEY_HIGHLIGHTS = [
  'B.Tech in Information Technology (2023 - 2027)',
  'Modern Full Stack: React, Next.js, Node.js & MongoDB',
  'Clean, Maintainable & Accessible Code Architecture',
  'Available for Full-time Roles & Internships',
]

const STATS = [
  { value: '15+', label: 'Projects Built', color: 'text-sky-600 dark:text-sky-400' },
  { value: 'Full Stack', label: 'MERN & Next.js', color: 'text-indigo-600 dark:text-indigo-400' },
  { value: 'React', label: 'Frontend Stack', color: 'text-emerald-600 dark:text-emerald-400' },
  { value: '2027', label: 'B.Tech Grad', color: 'text-amber-600 dark:text-amber-400' },
]

const TECH_PILLS = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'MongoDB',
  'REST APIs',
  'Git',
]

const RESUME_URL = 'https://drive.google.com/file/d/1JrO16wfcc1qUyRbJzVv6jEWlDPYvTO5W/view?usp=sharing'
const GITHUB_PROJECTS_URL = 'https://github.com/amit-patel01?tab=repositories'

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 90)

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column — Professional Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* Recruiter-friendly status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles &amp; Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                AMIT <span className="gradient-text">PATEL</span>
              </h1>

              {/* Dynamic Typewriter Title */}
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200 min-h-[36px]">
                <span className="text-sky-600 dark:text-sky-400">&gt;</span>
                <span className="text-slate-900 dark:text-white font-mono">{typedRole}</span>
                <span className="text-sky-600 dark:text-sky-400 font-bold animate-pulse">|</span>
              </div>
            </div>

            {/* Pitch / Bio */}
            <p className="max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              B.Tech Information Technology student at <strong className="text-slate-900 dark:text-white">Parul University</strong>. 
              I engineer robust, responsive web applications, modular microservices, and clean REST APIs with 
              modern React, Next.js, and Node.js. Focused on writing scalable code that delivers business value.
            </p>

            {/* Core Tech Stack Chips */}
            <div className="flex items-center gap-2 flex-wrap">
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href={GITHUB_PROJECTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <FaGithub size={17} />
                <span>View Projects on GitHub</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                <FileText size={16} className="text-sky-600 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors w-full sm:w-auto text-center"
              >
                Get In Touch &rarr;
              </a>
            </div>

            {/* Key Trust Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-xl">
              {KEY_HIGHLIGHTS.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 size={14} className="text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Professional Profile Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[380px] glass-card p-6 sm:p-7 flex flex-col items-center text-center space-y-6">

              {/* Avatar with subtle ring */}
              <div className="relative h-32 w-32 rounded-full p-1 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800">
                  <img
                    src="https://github.com/Amit-Patel01.png"
                    alt="Amit Patel"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.onerror = null
                      e.target.src = profileImg?.src || profileImg || '/assets/profile.jpeg'
                    }}
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" title="Active & Available" />
              </div>

              {/* Title & Education */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Amit Patel</h3>
                <p className="text-xs sm:text-sm text-sky-600 dark:text-sky-400 font-semibold">Full Stack Developer &amp; Software Engineer</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 pt-0.5">
                  <MapPin size={12} className="text-slate-400" />
                  <span>Gujarat, India &bull; Open to Remote / Relocation</span>
                </p>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 w-full">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/50 text-center shadow-sm"
                  >
                    <div className={`text-lg font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2 pt-1 border-t border-slate-200 dark:border-slate-800/80 w-full justify-center">
                <a
                  href="https://github.com/amit-patel01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all font-semibold"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-patel01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-white transition-all font-semibold"
                >
                  <FaLinkedinIn size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
