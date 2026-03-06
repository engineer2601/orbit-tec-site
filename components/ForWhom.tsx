'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations
}

export default function ForWhom({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="for-whom" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-cyan/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block glass rounded-full px-4 py-1.5 text-orbit-cyan text-sm font-mono mb-6 border border-orbit-cyan/20"
          >
            {t.forWhom.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            <span className="gradient-text">{t.forWhom.title}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            {t.forWhom.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.forWhom.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="group glass rounded-2xl p-7 border border-white/5 hover:border-orbit-cyan/25 transition-all duration-400"
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl flex-shrink-0 mt-1">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-4">{item.industry}</h3>

                  {/* Pain */}
                  <div className="flex items-start gap-2 mb-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-red-400/70 flex-shrink-0" />
                    <p className="text-white/50 text-sm leading-relaxed">{item.pain}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 mb-3 pl-4">
                    <svg className="w-4 h-4 text-orbit-cyan/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Result */}
                  <div className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-orbit-cyan flex-shrink-0" />
                    <p className="text-orbit-cyan/90 text-sm font-medium leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orbit-blue to-orbit-cyan text-white font-bold text-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
          >
            {t.contact.badge}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
