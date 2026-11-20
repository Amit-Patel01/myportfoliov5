'use client'

import { Code, Wrench, Video, GraduationCap, Rocket } from 'lucide-react'

const MILESTONES = [
  {
    icon: Code,
    year: '2018',
    title: 'Started Learning',
    desc: 'Began web development journey through self-study, building foundational HTML, CSS, and JS skills.',
    badge: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
  },
  {
    icon: Wrench,
    year: '2020',
    title: 'PC Repair & Hardware',
    desc: 'Began PC & Laptop Repair, gaining extensive hands-on hardware and system troubleshooting experience.',
    badge: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
  },
  {
    icon: Video,
    year: '2021',
    title: 'Video Editing Journey',
    desc: 'Mastered Premiere Pro and After Effects, creating high quality video and media content.',
    badge: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20',
  },
  {
    icon: GraduationCap,
    year: '2023',
    title: 'B.Tech IT',
    desc: 'Enrolled in Information Technology at Parul University, Vadodara.',
    badge: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
  },
  {
    icon: Rocket,
    year: '2026',
    title: 'Founded Amit Solution Hub',
    desc: 'Founded Amit Solution Hub to make software and AI technology accessible and practical for businesses.',
    badge: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
  },
]

const Journey = () => {
  return (
    <section id="journey" className="section-container">
      
      {/* Section Header */}
      <div className="text-center mb-12 space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
          Career Path
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>
        <p className="max-w-lg mx-auto text-sm text-slate-600 dark:text-slate-400">
          Academic milestones, practical software engineering experience, and technical growth.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline Connecting Line */}
        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />

        <div className="space-y-6">
          {MILESTONES.map((m) => {
            const Icon = m.icon
            return (
              <div key={m.title} className="relative sm:pl-16">
                
                {/* Desktop Icon Indicator */}
                <div className="hidden sm:flex absolute left-0 top-3 w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm">
                  <Icon size={18} />
                </div>

                <div className="glass-card p-5 sm:p-6 flex items-start gap-4">
                  {/* Mobile Icon */}
                  <div className="sm:hidden p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 shrink-0">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${m.badge}`}>
                        {m.year}
                      </span>
                      {m.organization && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                          {m.organization}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {m.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default Journey
