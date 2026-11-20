'use client'

import { GraduationCap, Code2, Cpu, Globe, CheckCircle2, ShieldCheck, Terminal, Sparkles, BookOpen, Laptop } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const BentoGrid = () => {
  return (
    <section id="about" className="section-container relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-12 space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm">
          Professional Profile
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          About &amp; <span className="gradient-text">Engineering Background</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
          Bridging technical computer science foundations with modern full-stack application development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Card 1: Detailed Bio & Engineering Philosophy (8 cols) */}
        <div className="glass-card md:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                <Code2 size={20} />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Passionate About Building Production-Grade Web Systems
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am an Information Technology undergraduate at <strong className="text-slate-900 dark:text-white">Parul University</strong> with 
              hands-on experience engineering dynamic, scalable web applications. My development approach centers on 
              writing clean, modular code, enforcing responsive accessibility, and integrating resilient backend APIs.
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Whether building full-stack products from scratch with Next.js &amp; Node.js or collaborating on Git-driven 
              agile workflows, I continuously focus on performance optimization, secure database structures, and seamless user experiences.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 space-y-1 shadow-sm">
                <div className="text-xs font-bold text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  Frontend Engineering
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  React 18, Next.js App Router, Tailwind CSS &amp; state management.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 space-y-1 shadow-sm">
                <div className="text-xs font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Backend &amp; APIs
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Node.js, Express, MongoDB, MySQL &amp; secure REST endpoints.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 space-y-1 shadow-sm">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Code Craftsmanship
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Version control, DRY principles, component reusability &amp; responsive UI.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold mr-2">Focus Areas:</span>
            {['Full Stack Development', 'RESTful Architectures', 'UI/UX Implementation', 'Database Modeling'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Academic Background (4 cols) */}
        <div className="glass-card md:col-span-4 p-6 sm:p-7 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center shadow-sm">
              <GraduationCap size={22} />
            </div>
            
            <div>
              <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                Education
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Bachelor of Technology
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                Information Technology
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <p className="text-slate-900 dark:text-white font-bold">Parul University, Vadodara</p>
              <p className="font-medium">Duration: 2023 – 2027</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                Relevant Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Web Technologies, Computer Networks.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/60 text-center shadow-sm">
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-1.5">
              <CheckCircle2 size={13} />
              Strong Academic &amp; Practical Standing
            </span>
          </div>
        </div>

        {/* Card 3: Hiring Readiness & Location (4 cols) */}
        <div className="glass-card md:col-span-4 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center shadow-sm">
              <Globe size={20} />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Work Readiness</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Available for <strong className="text-slate-900 dark:text-white">Full-Time Software Engineer roles</strong> and <strong className="text-slate-900 dark:text-white">Internships</strong>.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400">Location:</span>
              <span className="font-bold text-slate-900 dark:text-white">Gujarat, India</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400">Relocation:</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">Open to Relocate</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400">Work Mode:</span>
              <span className="font-bold text-sky-700 dark:text-sky-400">On-site / Hybrid / Remote</span>
            </div>
          </div>
        </div>

        {/* Card 4: Code & Problem Solving Profiles (4 cols) */}
        <div className="glass-card md:col-span-4 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center shadow-sm">
              <Terminal size={20} />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Coding Profiles</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Active problem solver and open source contributor across developer platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="https://github.com/amit-patel01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white transition-colors font-semibold"
            >
              <FaGithub size={15} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/amit-patel01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-white transition-colors font-semibold"
            >
              <FaLinkedinIn size={15} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/AmitPatel4084/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-white transition-colors font-semibold"
            >
              <SiLeetcode size={14} />
              <span>LeetCode</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/amitpatel07/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-white transition-colors font-semibold"
            >
              <SiGeeksforgeeks size={15} />
              <span>GFG</span>
            </a>
          </div>
        </div>

        {/* Card 5: Engineering Values (4 cols) */}
        <div className="glass-card md:col-span-4 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Engineering Values</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Committed to technical best practices in every commit.
            </p>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Clean, readable, self-documenting code</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Mobile-first &amp; accessible UI components</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Modular API design &amp; error boundary handling</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default BentoGrid
