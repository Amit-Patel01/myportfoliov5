'use client'

import { Code2, Server, Wrench, Palette, Cpu, Sparkles, CheckCircle2, GitBranch, Shield, Zap } from 'lucide-react'

const TECH_CATEGORIES = [
  {
    category: 'Frontend Development',
    icon: Code2,
    accent: 'text-sky-600 dark:text-sky-400',
    border: 'border-sky-200 dark:border-sky-500/20',
    bg: 'bg-sky-50 dark:bg-sky-500/10',
    description: 'Crafting responsive, high-performance, and accessible web interfaces.',
    items: [
      { name: 'React.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript (ES6+)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: Server,
    accent: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-500/20',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
    description: 'Architecting scalable server logic, RESTful APIs, and database models.',
    items: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'RESTful APIs', iconUrl: 'https://api.iconify.design/lucide:server.svg?color=%230284c7' },
    ],
  },
  {
    category: 'Developer Tools & Platforms',
    icon: Wrench,
    accent: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-500/20',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    description: 'Version control, API testing, package management, and cloud hosting.',
    items: [
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', iconUrl: 'https://api.iconify.design/simple-icons:postman.svg?color=%23FF6C37' },
      { name: 'Linux / Bash', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Vercel', iconUrl: 'https://api.iconify.design/simple-icons:vercel.svg?color=%230284c7' },
    ],
  },
  {
    category: 'UI/UX & Design Systems',
    icon: Palette,
    accent: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-500/20',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    description: 'Wireframing, interactive prototyping, and user journey mapping.',
    items: [
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
      { name: 'UI Prototyping', iconUrl: 'https://api.iconify.design/lucide:layout.svg?color=%237c3aed' },
      { name: 'Design Systems', iconUrl: 'https://api.iconify.design/lucide:component.svg?color=%237c3aed' },
      { name: 'Canva', iconUrl: 'https://api.iconify.design/simple-icons:canva.svg?color=%2300C4CC' },
    ],
  },
]

const CORE_COMPETENCIES = [
  {
    icon: Zap,
    title: 'Fast & Responsive UI',
    desc: 'Mobile-first layouts, semantic HTML5, and fluid responsiveness across all viewports.',
  },
  {
    icon: Server,
    title: 'Robust RESTful APIs',
    desc: 'Well-structured endpoints, request validation, authentication, and error handling.',
  },
  {
    icon: Database,
    title: 'Database Schema Design',
    desc: 'Normalized relational tables (MySQL) and document schemas (MongoDB).',
  },
  {
    icon: GitBranch,
    title: 'Git Version Control',
    desc: 'Feature branching, clean commit history, code review, and CI/CD deployment.',
  },
]

function Database(props) {
  return <Server {...props} />
}

const Skills = () => {
  return (
    <section id="skills" className="section-container space-y-16">

      {/* Section Header */}
      <div className="text-center space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm">
          Technical Proficiency
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm">
          A structured overview of frameworks, programming languages, databases, and development tooling.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_CATEGORIES.map((cat) => {
          const Icon = cat.icon
          return (
            <div key={cat.category} className="glass-card p-6 sm:p-7 space-y-5">
              <div className="flex items-start justify-between gap-3 border-b border-slate-200/90 dark:border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`p-1.5 rounded-lg ${cat.bg} ${cat.accent} ${cat.border} border shadow-sm`}>
                      <Icon size={16} />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
                  >
                    <img
                      src={tech.iconUrl}
                      alt={tech.name}
                      className="w-4 h-4 object-contain shrink-0"
                      loading="lazy"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                    <span className="truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Core Engineering Competencies Bar */}
      <div className="glass-card p-6 sm:p-8 space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Development Standards
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Engineering Principles &amp; Workflow
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_COMPETENCIES.map((comp) => {
            const Icon = comp.icon
            return (
              <div
                key={comp.title}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-700/40 space-y-2 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Icon size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{comp.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{comp.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default Skills
