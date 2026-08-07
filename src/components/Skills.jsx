'use client'

import { Code2, Settings, Film, Sparkles, Zap, Laptop2, Palette } from 'lucide-react'

const TECH_CATEGORIES = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'REST APIs', iconUrl: 'https://api.iconify.design/lucide:server.svg?color=%2338bdf8' },
    ],
  },
  {
    category: 'Creative & UI/UX',
    items: [
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
      { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
      { name: 'Canva', iconUrl: 'https://api.iconify.design/simple-icons:canva.svg?color=%2300C4CC' },
      { name: 'CapCut', iconUrl: 'https://api.iconify.design/simple-icons:capcut.svg?color=%23ffffff' },
    ],
  },
  {
    category: 'OS, Systems & Hardware',
    items: [
      { name: 'Kali Linux', iconUrl: 'https://api.iconify.design/simple-icons:kalilinux.svg?color=%23557C94' },
      { name: 'Zorin OS', iconUrl: 'https://api.iconify.design/simple-icons:zorinos.svg?color=%230CC0DF' },
      { name: 'Arch Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg' },
      { name: 'Hyprland', iconUrl: 'https://api.iconify.design/simple-icons:hyprland.svg?color=%238aadf4' },
      { name: 'Windows OS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'PC Repair', iconUrl: 'https://api.iconify.design/lucide:cpu.svg?color=%2306b6d4' },
      { name: 'AI Integration', iconUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%2310b981' },
    ],
  },
]

const PROCESS = [
  { step: 1, title: 'Discovery & Planning', description: 'Understand requirements, business goals, and system architecture.', icon: Sparkles },
  { step: 2, title: 'Design & Mockups', description: 'Create wireframes, design systems, and Figma mockups.', icon: Palette },
  { step: 3, title: 'Frontend Development', description: 'Build polished UIs with React, Next.js & Tailwind CSS.', icon: Code2 },
  { step: 4, title: 'Backend & Database', description: 'Secure APIs, database models, and server logic with Node & MongoDB.', icon: Settings },
  { step: 5, title: 'Testing & QA', description: 'Connect all layers and perform end-to-end functionality checks.', icon: Zap },
  { step: 6, title: 'Deployment & Launch', description: 'Deploy to cloud infrastructure and provide continuous maintenance.', icon: Laptop2 },
]

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: 'Development',
    desc: 'Engineering backend logic, database structures, and responsive user interfaces.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PHP', 'Tailwind', 'JavaScript', 'TypeScript'],
  },
  {
    icon: Film,
    title: 'Creative Media',
    desc: 'Designing media assets, UI/UX mockups, and video content.',
    tags: ['Premiere Pro', 'After Effects', 'Photoshop', 'UI/UX Design', 'Figma', 'Canva', 'CapCut'],
  },
  {
    icon: Settings,
    title: 'Hardware & Tech',
    desc: 'Hardware troubleshooting, OS setup, network configuration, and data management.',
    tags: ['PC Repair', 'Windows OS', 'Kali Linux', 'Zorin OS', 'Arch Linux', 'Hardware Diagnostics', 'AI Integration'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-container space-y-20">

      {/* Tech Stack Grid */}
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technologies I <span className="text-cyan-400">Use</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Complete list of frameworks, languages, databases, tools & operating systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.category} className="glass-card p-5 space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200"
                  >
                    <img
                      src={tech.iconUrl}
                      alt={tech.name}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My Workflow <span className="text-indigo-400">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="glass-card p-6 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{item.step}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Domain Proficiency */}
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Domain <span className="text-emerald-400">Proficiency</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.title} className="glass-card p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-white">{group.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{group.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {group.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default Skills
