'use client'

import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const GITHUB_PROFILE_URL = 'https://github.com/amit-patel01?tab=repositories'

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="glass-card max-w-4xl mx-auto p-8 sm:p-12 text-center space-y-6 border border-slate-200/90 dark:border-slate-800/80 shadow-md">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm mx-auto">
          <FaGithub size={14} />
          <span>Open Source &amp; Code Repositories</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Explore All Projects on <span className="gradient-text">GitHub</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            All my software applications, full-stack web platforms, interactive tools, and open-source contributions are actively maintained and publicly available on GitHub.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {['Production-Ready Repositories', 'Full Stack MERN & Next.js', 'Clean Git Architecture', 'Active Commits'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Big Direct GitHub Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base px-8 py-3.5 font-bold shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2.5 w-full sm:w-auto"
          >
            <FaGithub size={20} />
            <span>Go to GitHub Repositories</span>
            <ExternalLink size={16} />
          </a>

          <a
            href="https://github.com/amit-patel01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base px-6 py-3.5 font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>@amit-patel01 Profile</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
