'use client';

import { motion } from 'framer-motion'
import { Code, Palette, Wrench, Video, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon:  Code,
    title: 'Web Development',
    desc:  'Custom responsive websites for businesses and individuals using modern React & MERN technologies.',
    color: 'text-blue-500',
    grad:  'from-blue-500 to-indigo-600',
    glow:  'rgba(99,102,241,0.4)',
    bg:    'from-blue-500/8 to-indigo-500/8',
    tags:  ['React', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    icon:  Palette,
    title: 'UI / UX Design',
    desc:  'Beautiful, modern user interface designs that engage your audience and drive conversions.',
    color: 'text-violet-500',
    grad:  'from-violet-500 to-pink-600',
    glow:  'rgba(167,139,250,0.4)',
    bg:    'from-violet-500/8 to-pink-500/8',
    tags:  ['Figma', 'Photoshop', 'Wireframing', 'Prototyping'],
  },
  {
    icon:  Wrench,
    title: 'Technical Support',
    desc:  'PC and laptop troubleshooting, hardware upgrades, Windows setup and software installation.',
    color: 'text-emerald-500',
    grad:  'from-emerald-500 to-teal-600',
    glow:  'rgba(16,185,129,0.4)',
    bg:    'from-emerald-500/8 to-teal-500/8',
    tags:  ['PC Repair', 'SSD Upgrade', 'Driver Fix', 'Networking'],
  },
  {
    icon:  Video,
    title: 'Video Editing',
    desc:  'Professional social media video editing, motion graphics, and compelling content creation.',
    color: 'text-orange-500',
    grad:  'from-orange-500 to-red-500',
    glow:  'rgba(249,115,22,0.4)',
    bg:    'from-orange-500/8 to-red-500/8',
    tags:  ['Premiere Pro', 'After Effects', 'Reels', 'Thumbnails'],
  },
]

const Services = () => (
  <section id="services" className="section-container">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20 space-y-4"
    >
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
                       bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400
                       border border-violet-200/60 dark:border-violet-500/25">
        Services
      </span>
      <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}>
        What I{' '}
        <span className="bg-gradient-to-r from-violet-500 to-pink-600 bg-clip-text text-transparent">
          Offer
        </span>
      </h2>
      <p className="max-w-xl mx-auto text-[15px] text-slate-600 dark:text-slate-400">
        End-to-end solutions — from design to development to technical support.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {SERVICES.map((svc, i) => {
        const Icon = svc.icon
        return (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative glass rounded-3xl p-7 flex flex-col gap-5 cursor-default group overflow-hidden
                       hover:shadow-2xl transition-all duration-400"
            style={{ '--glow': svc.glow }}
          >
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${svc.bg}
                             opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

            {/* Icon */}
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                               bg-gradient-to-br ${svc.grad}
                               shadow-[0_6px_20px_var(--glow)]
                               group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 space-y-2.5">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {svc.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-1.5">
              {svc.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium
                             bg-white/60 dark:bg-white/8 text-slate-600 dark:text-slate-400
                             border border-white/60 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <div className="relative z-10 flex items-center gap-1 text-xs font-semibold
                            text-indigo-600 dark:text-indigo-400
                            opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
                            transition-all duration-300">
              Learn more <ArrowRight size={12} />
            </div>
          </motion.div>
        )
      })}
    </div>
  </section>
)

export default Services
