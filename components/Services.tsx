'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

const ICONS: Record<string, React.ReactNode> = {
  agents: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="16" cy="5" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="27" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="5" cy="16" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="27" cy="16" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="8" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="8" cy="24" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.4" />
      <line x1="16" y1="13" x2="16" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="19" x2="16" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="13" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="19" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  rag: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <path d="M4 8h8M4 12h6M4 16h7M4 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <rect x="16" y="4" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <rect x="16" y="14" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  transform: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <path d="M4 24L12 14l6 4 10-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="4" r="2" fill="currentColor" />
    </svg>
  ),
  product: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <rect x="10" y="4" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="20" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="13" y="7" width="6" height="4" rx="1" fill="currentColor" opacity="0.4" />
      <line x1="13" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="13" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
}

const COLORS = ['text-orbit-blue', 'text-orbit-purple', 'text-orbit-cyan', 'text-emerald-400']
const BG_GLOWS = ['from-orbit-blue/10', 'from-orbit-purple/10', 'from-orbit-cyan/10', 'from-emerald-500/10']

interface Props { t: Translations }

export default function Services({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block glass rounded-full px-4 py-1.5 text-orbit-cyan text-sm font-mono mb-6 border border-orbit-cyan/20"
          >
            {t.services.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t.services.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{t.services.title.split(' ').at(-1)}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group relative glass rounded-3xl p-8 border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${BG_GLOWS[i]} to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className={`inline-flex p-4 rounded-2xl bg-white/5 ${COLORS[i]} mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}>
                {ICONS[item.icon]}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed mb-5 flex-1">{item.description}</p>

              {/* Business result */}
              <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-white/4 border border-white/8 mb-5">
                <svg className="w-4 h-4 text-orbit-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-sm font-semibold text-white/80">{item.result}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-white/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
