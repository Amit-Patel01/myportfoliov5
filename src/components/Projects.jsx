'use client'

import { useState } from 'react'
import { LayoutGrid, Loader2, RefreshCw, WifiOff, Code2 } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const CATEGORIES = ['All', 'Frontend', 'Backend & DB', 'Others']

const Projects = () => {
  const { items, loading, error, refetch } = usePortfolio()
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter strictly for projects
  const projectItems = items.filter(item => item.type === 'project' || !item.type)

  const filterItem = (item, category) => {
    if (category === 'All') return true
    const tags = (item.tags || []).map(t => t.toLowerCase())

    if (category === 'Frontend') {
      const frontendTech = ['react', 'next.js', 'html', 'css', 'bootstrap', 'tailwindcss', 'javascript', 'typescript', 'canvas api', 'three.js', 'angular', 'jquery', 'responsive']
      return tags.some(t => frontendTech.includes(t))
    }

    if (category === 'Backend & DB') {
      const backendTech = ['node.js', 'express', 'php', 'mysql', 'mongodb', 'firebase', 'python', 'java', 'django', 'flask', 'fastapi', 'spring boot', '.net', 'c#', 'database']
      return tags.some(t => backendTech.includes(t))
    }

    if (category === 'Others') {
      const frontendTech = ['react', 'next.js', 'html', 'css', 'bootstrap', 'tailwindcss', 'javascript', 'typescript', 'canvas api', 'three.js', 'angular', 'jquery', 'responsive']
      const backendTech = ['node.js', 'express', 'php', 'mysql', 'mongodb', 'firebase', 'python', 'java', 'django', 'flask', 'fastapi', 'spring boot', '.net', 'c#', 'database']
      return !tags.some(t => frontendTech.includes(t) || backendTech.includes(t))
    }

    return true
  }

  const filteredItems = projectItems.filter(item => filterItem(item, activeCategory))

  return (
    <section id="projects" className="section-container">
      {/* Heading */}
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <LayoutGrid size={13} />
          Web & App Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Software & Web <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-400">
          Full stack applications, web platforms, and custom software projects built for clients & open source.
        </p>
      </div>

      {/* Category Filter */}
      {!loading && !error && (
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/40'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="py-16 text-center space-y-3">
          <Loader2 size={32} className="text-cyan-400 animate-spin mx-auto" />
          <p className="text-sm text-slate-400 font-medium">Loading projects…</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="py-8 max-w-md mx-auto">
          <div className="glass-card p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto">
              <WifiOff size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1 text-sm">Offline / Static Mode</h3>
              <p className="text-xs text-slate-400">
                Could not connect to database/API. Showing default static project data.
              </p>
            </div>
            <button
              onClick={refetch}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
            >
              <RefreshCw size={14} />
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <PortfolioCard key={item.id || i} item={item} index={i} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="inline-block p-6 glass-card max-w-sm mx-auto space-y-3">
                <Code2 size={36} className="mx-auto text-slate-500" />
                <p className="text-sm text-slate-400">No projects found in this category.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Projects
