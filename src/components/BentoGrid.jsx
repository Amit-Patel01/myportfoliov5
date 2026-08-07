'use client'

import { useState, useRef } from 'react'
import { MapPin, ArrowUpRight, Terminal, Zap, Github, Linkedin, Mail } from 'lucide-react'

const BentoGrid = () => {
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { text: "Welcome to Amit's Portfolio OS v2.0!", type: 'welcome' },
    { text: 'Type "help" to see all commands.', type: 'hint' },
  ])
  const terminalEndRef = useRef(null)

  const handleCommandSubmit = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    let response = ''
    if (cmd === 'help') {
      response = 'Commands:\n  about    – Founder bio\n  skills   – Core skills list\n  services – Service offerings\n  contact  – Get in touch\n  clear    – Clear screen'
    } else if (cmd === 'about') {
      response = 'Founder & CEO of Amit Solution Hub. Building AI-powered apps, web platforms, and digital products.'
    } else if (cmd === 'skills') {
      response = 'React • Next.js • Node.js • MongoDB • Express • PHP • Tailwind • AI Integration'
    } else if (cmd === 'services') {
      response = 'Web Development • AI Solutions • Cloud Services • UI/UX Design'
    } else if (cmd === 'contact') {
      response = 'Email: amitpatel07029@gmail.com\nLinkedIn: linkedin.com/in/amit-patel01/'
    } else if (cmd === 'clear') {
      setTerminalHistory([])
      setTerminalInput('')
      return
    } else {
      response = `Unknown command: "${cmd}". Type "help" for a list.`
    }

    setTerminalHistory(prev => [
      ...prev,
      { text: `amit@portfolio:~$ ${terminalInput}`, type: 'input' },
      { text: response, type: 'output' },
    ])
    setTerminalInput('')
  }

  return (
    <section id="about" className="section-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About Me Card */}
        <div className="glass-card md:col-span-2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              About <span className="text-cyan-400">Amit Patel</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I'm Amit Patel, Founder & CEO of <strong className="text-cyan-400">Amit Solution Hub</strong> and a
              B.Tech IT student at Parul University. I build AI-powered applications, scalable web platforms,
              cloud infrastructure, and custom software for startups and businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: 'Web Development', color: 'border-cyan-500/30 text-cyan-400' },
                { label: 'AI Integration', color: 'border-indigo-500/30 text-indigo-400' },
                { label: 'Cloud & DevOps', color: 'border-emerald-500/30 text-emerald-400' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-3 rounded-xl bg-slate-800/50 border ${item.color} text-xs font-semibold`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {['Founder & CEO', 'B.Tech IT', 'Tech Agency Owner'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full border border-slate-700 bg-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Location Card */}
        <div className="glass-card p-6 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-white font-bold text-base">Gujarat, India</p>
            <p className="text-slate-400 text-xs mt-1">Serving Clients Worldwide 🌍</p>
          </div>
          <div className="flex items-center gap-1.5 pt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">Open to Remote Work</span>
          </div>
        </div>

        {/* Interactive Terminal Card */}
        <div className="glass-card md:col-span-2 p-5 flex flex-col justify-between font-mono text-xs bg-slate-950/90 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Terminal size={12} />
              <span>Interactive CLI</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1.5 max-h-[120px] text-left">
            {terminalHistory.map((item, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap ${item.type === 'welcome' ? 'text-indigo-400 font-bold' :
                    item.type === 'hint' ? 'text-amber-400' :
                      item.type === 'input' ? 'text-cyan-400 font-semibold' :
                        'text-slate-300'
                  }`}
              >
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 border-t border-slate-800 pt-2 mt-3">
            <span className="text-cyan-400 font-bold">amit@portfolio:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={e => setTerminalInput(e.target.value)}
              className="bg-transparent border-none outline-none p-0 text-white font-mono text-xs w-full"
              placeholder='Type "help"…'
            />
          </form>
        </div>

        {/* Connect & Social Card */}
        <div className="glass-card p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect</span>
            <ArrowUpRight size={16} className="text-indigo-400" />
          </div>

          <div className="flex items-center justify-center gap-3 py-2">
            {[
              { Icon: Github, href: 'https://github.com/amit-patel01', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/amit-patel01/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:amitpatel07029@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-400 text-center">
            Open for freelance & contract roles
          </p>
        </div>

      </div>
    </section>
  )
}

export default BentoGrid
