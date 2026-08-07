'use client'

import { Sparkles, ArrowRight, MessageSquare, Check, Code2, Cpu, Globe } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.jpeg'

const ROLES = [
  'Technology Partner',
  'AI Solutions Architect',
  'Full Stack Developer',
  'Cloud & DevOps Engineer',
  'Startup Consultant',
]

const TRUST_POINTS = [
  'Trusted by Startups',
  'Open to Global Partnerships',
  'Building Scalable Technology',
  'Long-Term Collaboration',
]

const STATS = [
  { value: '25+', label: 'Projects', color: 'text-cyan-400' },
  { value: '10+', label: 'Clients', color: 'text-indigo-400' },
  { value: 'AI', label: 'Solutions', color: 'text-emerald-400' },
  { value: '24/7', label: 'Support', color: 'text-amber-400' },
]

const SERVICES = [
  { icon: Code2, label: 'Web Dev', color: 'text-cyan-400' },
  { icon: Cpu, label: 'AI/ML', color: 'text-indigo-400' },
  { icon: Globe, label: 'Cloud', color: 'text-emerald-400' },
]

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 100)

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-cyan-500/30 bg-cyan-950/20 text-cyan-400">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Technology Partner for Startups & Businesses</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                AMIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">PATEL</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-200">
                Founder & CEO &bull; <span className="text-cyan-400">Amit Solution Hub</span>
              </p>

              {/* Typewriter */}
              <div className="flex items-center gap-2 text-base sm:text-lg font-mono text-slate-300 pt-1">
                <span className="text-cyan-400 font-bold">&lt;</span>
                <span className="text-indigo-400 font-semibold">{typedRole}</span>
                <span className="text-cyan-400 font-bold animate-pulse">_</span>
                <span className="text-cyan-400 font-bold">&gt;</span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
              I founded Amit Solution Hub to help startups, businesses & organizations transform ideas into
              scalable digital products — AI apps, web platforms, cloud infrastructure, automation & digital transformation.
            </p>

            {/* Service Chips */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {SERVICES.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200"
                  >
                    <Icon size={14} className={s.color} />
                    {s.label}
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="btn-primary"
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="btn-secondary"
              >
                <MessageSquare size={16} />
                <span>View Projects</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-4">
              {TRUST_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs font-medium text-slate-300"
                >
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Profile Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[380px] glass-card p-6 sm:p-8 flex flex-col items-center text-center space-y-6">

              {/* Avatar */}
              <div className="relative h-32 w-32 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-indigo-500">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900">
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
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Amit Patel</h3>
                <p className="text-sm text-cyan-400 font-semibold">Founder & CEO</p>
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Available for projects</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center"
                  >
                    <div className={`text-xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
