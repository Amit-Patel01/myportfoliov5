'use client'

import { useCallback, useEffect, useState } from 'react'
import { Loader2, RefreshCw, WifiOff, Code2, Github } from 'lucide-react'
import PortfolioCard from './PortfolioCard'

const CATEGORIES = ['All', 'Frontend', 'Backend & DB', 'Others']
const EXCLUDED_REPOSITORIES = new Set([
  'campus-connect', 'amitsolutionhub', 'chokeyy', 'solutionhub', 'ashexam',
  'nirvabirthdayjoshisis', 'certificategenaret', 'lms-solutionhu', 'birthday',
  'amitsolutionhub-solutionchat', 'portfoiloamit',
])

const isAllowedRepository = (project) => {
  const repositoryName = project.github?.split('/').pop()?.toLowerCase()
  return repositoryName && !EXCLUDED_REPOSITORIES.has(repositoryName)
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const loadProjects = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/github-projects', { cache: 'no-store' })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Could not load GitHub repositories.')
      // Client-side safeguard: excluded repositories can never render, even from a stale API response.
      setProjects((data.items || []).filter(isAllowedRepository))
      setError(null)
    } catch (err) {
      setProjects([])
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  const filterItem = (item, category) => {
    if (category === 'All') return true
    const tags = (item.tags || []).map(tag => tag.toLowerCase())
    const frontendTech = ['react', 'next.js', 'html', 'css', 'bootstrap', 'tailwindcss', 'javascript', 'typescript', 'canvas api', 'three.js', 'angular', 'jquery', 'responsive']
    const backendTech = ['node.js', 'express', 'php', 'mysql', 'mongodb', 'firebase', 'python', 'java', 'django', 'flask', 'fastapi', 'spring boot', '.net', 'c#', 'database']

    if (category === 'Frontend') return tags.some(tag => frontendTech.includes(tag))
    if (category === 'Backend & DB') return tags.some(tag => backendTech.includes(tag))
    return !tags.some(tag => frontendTech.includes(tag) || backendTech.includes(tag))
  }

  const filteredItems = projects.filter(item => filterItem(item, activeCategory))

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Github size={13} />
          Web & App Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Software & Web <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-400">Latest public repositories fetched from GitHub.</p>
      </div>

      {!loading && !error && (
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/40'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="py-16 text-center space-y-3">
          <Loader2 size={32} className="text-cyan-400 animate-spin mx-auto" />
          <p className="text-sm text-slate-400 font-medium">Loading GitHub projects…</p>
        </div>
      )}

      {error && (
        <div className="py-8 max-w-md mx-auto">
          <div className="glass-card p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto">
              <WifiOff size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1 text-sm">GitHub projects unavailable</h3>
              <p className="text-xs text-slate-400">{error}</p>
            </div>
            <button onClick={loadProjects} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold">
              <RefreshCw size={14} /> Retry
            </button>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <PortfolioCard key={item.id || index} item={item} index={index} />)
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="inline-block p-6 glass-card max-w-sm mx-auto space-y-3">
                <Code2 size={36} className="mx-auto text-slate-500" />
                <p className="text-sm text-slate-400">No GitHub projects found in this category.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Projects
