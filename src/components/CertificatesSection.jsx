'use client'

import { Award, Loader2 } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const CertificatesSection = () => {
  const { items, loading } = usePortfolio()
  const certItems = items.filter(item => item.type === 'certificate')

  return (
    <section id="certificates" className="section-container">
      <div className="text-center mb-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Award size={13} />
          Certifications & Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Certificates & <span className="text-amber-400">Achievements</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-400">
          Verified certificates from freeCodeCamp, Udemy, and technical organizations.
        </p>
      </div>

      {loading && (
        <div className="py-12 text-center text-slate-400">
          <Loader2 size={28} className="animate-spin mx-auto mb-2 text-amber-400" />
          Loading certificates…
        </div>
      )}

      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certItems.length > 0 ? (
            certItems.map((item, i) => (
              <PortfolioCard key={item.id || i} item={item} index={i} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <div className="inline-block p-6 glass-card max-w-sm mx-auto space-y-3">
                <Award size={32} className="mx-auto text-slate-500" />
                <p className="text-sm text-slate-400">No certificates added yet. You can add them from Admin Panel.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default CertificatesSection
