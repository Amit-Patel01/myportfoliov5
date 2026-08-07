'use client';

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Cpu, 
  Cloud, 
  Palette, 
  Lock, 
  TrendingUp, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Users2, 
  HeartHandshake, 
  ShieldCheck 
} from 'lucide-react'

const HIGHLIGHTS = [
  { icon: Briefcase,     title: 'Founder & CEO',                    desc: 'Amit Solution Hub' },
  { icon: GraduationCap, title: 'B.Tech Information Technology',   desc: 'Parul University' },
  { icon: Code,          title: 'Full Stack Developer',              desc: 'MERN, Next.js, API Integration' },
  { icon: Cpu,           title: 'AI Solutions & Automation',         desc: 'AI agents, custom LLMs' },
  { icon: Cloud,         title: 'Cloud & DevOps Solutions',         desc: 'AWS, Docker, CI/CD' },
  { icon: Palette,       title: 'User Interface / UX Design',        desc: 'Figma, premium interaction design' },
  { icon: Lock,          title: 'Cyber Security Services',           desc: 'Securing web applications' },
  { icon: TrendingUp,    title: 'Digital Marketing & Growth',        desc: 'SEO, branding strategies' },
]

const SERVICES = [
  { 
    icon: Code, 
    title: 'Web Development', 
    desc: 'Building responsive, high-performance web applications and enterprise portals.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.15)'
  },
  { 
    icon: Sparkles, 
    title: 'AI Solutions', 
    desc: 'Integrating AI capabilities, automation agents, and NLP systems into custom code.',
    color: 'from-violet-500 to-fuchsia-600',
    glow: 'rgba(139,92,246,0.15)'
  },
  { 
    icon: Cloud, 
    title: 'Cloud Services', 
    desc: 'Architecting secure cloud server systems, migrations, and serverless compute.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.15)'
  },
  { 
    icon: Palette, 
    title: 'UI/UX Design', 
    desc: 'Designing creative mockups, wireframes, and smooth pixel-perfect interactive flows.',
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.15)'
  },
  { 
    icon: Terminal, 
    title: 'DevOps', 
    desc: 'Implementing continuous integration (CI/CD), containers, and cloud automation.',
    color: 'from-indigo-500 to-blue-600',
    glow: 'rgba(99,102,241,0.15)'
  },
  { 
    icon: Lock, 
    title: 'Cyber Security', 
    desc: 'Performing vulnerability assessments, API protection, and credential encryption.',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.15)'
  },
]

const STATS = [
  { icon: CheckCircle2,   value: '25+',  label: 'Projects Completed' },
  { icon: Users2,         value: '10+',  label: 'Happy Clients' },
  { icon: HeartHandshake, value: '24/7', label: 'Support Available' },
  { icon: ShieldCheck,    value: '100%', label: 'Client Satisfaction' },
]

const About = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section id="about" className="section-container relative z-10 space-y-20">
      
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-glow-violet"
        >
          About Amit Patel
        </motion.span>
        <h2 className="font-black text-4xl md:text-5xl text-white leading-tight font-outfit">
          Founder & CEO of{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Amit Solution Hub
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-7 sm:p-8 flex flex-col justify-between card-shine"
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-outfit">Brief Bio</h3>
              <p className="text-[14px] leading-relaxed text-slate-300">
                I'm Amit Patel, Founder & CEO of Amit Solution Hub and a B.Tech IT student. I build AI-powered applications, scalable web platforms, cloud solutions, and custom software for startups, businesses, and organizations. My goal is to deliver innovative, secure, and high-performance digital solutions that create real business impact.
              </p>
            </div>
          </motion.div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Key Strengths</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {HIGHLIGHTS.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onMouseMove={handleMouseMove}
                    className="glass-card p-4.5 flex items-center gap-3.5 card-shine"
                    whileHover={{ x: 4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-9 h-9 rounded-xl bg-cyan-950/60 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={16} />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white font-outfit truncate">{h.title}</p>
                      <p className="text-[10.5px] text-slate-400 truncate">{h.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Services Offered</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onMouseMove={handleMouseMove}
                  className="glass-card p-6 flex flex-col justify-between group overflow-hidden relative card-shine"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(150px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${s.glow}, transparent 60%)` }}
                  />
                  
                  <div className="space-y-4 relative z-10">
                    <motion.div 
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={18} />
                    </motion.div>
                    <h5 className="text-sm font-bold text-white font-outfit">{s.title}</h5>
                    <p className="text-[11.5px] leading-relaxed text-slate-300">{s.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseMove={handleMouseMove}
              className="glass-card p-6 flex items-center gap-4 group justify-center text-center lg:text-left lg:justify-start card-shine"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-cyan-950/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0 border border-cyan-500/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={20} />
              </motion.div>
              <div>
                <h4 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-outfit">
                  {stat.value}
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default About
