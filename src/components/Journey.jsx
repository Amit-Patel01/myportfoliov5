'use client'

import { Code, Hammer, Video, GraduationCap, Rocket } from 'lucide-react'

const MILESTONES = [
  {
    icon:  Code,
    year:  '2018',
    title: 'Started Learning',
    desc:  'Began web development journey through self-study, building foundational HTML, CSS, and JS skills.',
    badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  },
  {
    icon:  Hammer,
    year:  '2020',
    title: 'PC Repair & Hardware',
    desc:  'Began PC & Laptop Repair, gaining extensive hands-on hardware and system troubleshooting experience.',
    badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    icon:  Video,
    year:  '2021',
    title: 'Video Editing Journey',
    desc:  'Mastered Premiere Pro and After Effects, creating high quality video and media content.',
    badge: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  },
  {
    icon:  GraduationCap,
    year:  '2023',
    title: 'B.Tech IT',
    desc:  'Enrolled in Information Technology at Parul University, Vadodara.',
    badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  {
    icon:  Rocket,
    year:  '2026',
    title: 'Founded Amit Solution Hub',
    desc:  'Founded Amit Solution Hub to make software and AI technology accessible and practical for businesses.',
    badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  },
]

const Journey = () => {
  return (
    <section id="journey" className="section-container">
      <div className="text-center mb-12 space-y-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          My <span className="text-indigo-400">Timeline</span>
        </h2>
        <p className="max-w-lg mx-auto text-sm text-slate-400">
          A journey of continuous learning, building, and creating real impact.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-slate-800 hidden sm:block" />

        <div className="space-y-6">
          {MILESTONES.map((m) => {
            const Icon = m.icon
            return (
              <div key={m.year} className="relative sm:pl-16">
                {/* Desktop Icon Indicator */}
                <div className="hidden sm:flex absolute left-0 top-3 w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 items-center justify-center text-cyan-400 shrink-0">
                  <Icon size={18} />
                </div>

                <div className="glass-card p-5 sm:p-6 flex items-start gap-4">
                  {/* Mobile Icon */}
                  <div className="sm:hidden p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 shrink-0">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${m.badge}`}>
                        {m.year}
                      </span>
                      <h3 className="font-bold text-base text-white">{m.title}</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{m.desc}</p>
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
