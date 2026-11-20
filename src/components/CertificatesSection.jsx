'use client'

import { Award, CheckCircle2, ExternalLink } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import defaultPortfolioData from '../data/portfolio.json'
import { usePortfolio } from '../hooks/usePortfolio'

const CertificatesSection = () => {
  const { items: contextItems } = usePortfolio()
  
  // Ensure we always have high quality verified credentials from portfolio.json as baseline
  const fallbackCerts = (defaultPortfolioData.items || []).filter(item => item.type === 'certificate')
  const certItems = contextItems?.filter(item => item.type === 'certificate').length > 0 
    ? contextItems.filter(item => item.type === 'certificate')
    : fallbackCerts

  return (
    <section id="certificates" className="section-container">
      
      {/* Section Header */}
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm">
          <Award size={13} />
          Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Certificates &amp; <span className="gradient-text">Achievements</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
          Industry-recognized certifications and intensive coursework in modern web development and algorithms.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certItems.map((item, i) => (
          <PortfolioCard key={item.id || i} item={item} index={i} />
        ))}
      </div>

    </section>
  )
}

export default CertificatesSection
