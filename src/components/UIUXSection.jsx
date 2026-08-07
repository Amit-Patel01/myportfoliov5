'use client'

import { Palette, Loader2, Code2 } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const UIUXSection = () => {
  const { items, loading } = usePortfolio()
  const uiuxItems = items.filter(item => item.type === 'uiux')

  return (
    <section id="uiux" className="section-container">
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Palette size={13} />
          UI/UX & Design
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          UI/UX <span className="text-purple-400">Design Showcase</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-400">
          User interface designs, mobile app wireframes, and interactive Figma prototypes.
        </p>
      </div>

      {loading && (
        <div className="py-12 text-center text-slate-400">
          <Loader2 size={28} className="animate-spin mx-auto mb-2 text-purple-400" />
          Loading UI/UX designs…
        </div>
      )}

      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiuxItems.length > 0 ? (
            uiuxItems.map((item, i) => (
              <PortfolioCard key={item.id || i} item={item} index={i} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <div className="inline-block p-6 glass-card max-w-sm mx-auto space-y-3">
                <Palette size={32} className="mx-auto text-slate-500" />
                <p className="text-sm text-slate-400">No UI/UX items added yet. You can add them from Admin Panel.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default UIUXSection
