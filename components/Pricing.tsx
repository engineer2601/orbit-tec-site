'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations
}

export default function Pricing({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="pricing" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-blue/4 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block glass rounded-full px-4 py-1.5 text-orbit-blue text-sm font-mono mb-6 border border-orbit-blue/20"
          >
            {t.pricing.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            {t.pricing.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.items.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-orbit-blue/15 to-orbit-purple/10 border-orbit-blue/40 hover:border-orbit-blue/70 shadow-glow-blue'
                  : 'glass border-white/8 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orbit-blue to-orbit-purple text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <div className={`text-3xl font-black mb-3 ${plan.highlight ? 'gradient-text' : 'text-white'}`}>
                  {plan.price}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-orbit-blue' : 'text-orbit-cyan'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-orbit-blue to-orbit-purple text-white hover:shadow-glow-blue hover:scale-105'
                    : 'glass border border-white/15 text-white hover:border-orbit-blue/40 hover:bg-orbit-blue/10'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          {t.pricing.note}
        </motion.p>
      </div>
    </section>
  )
}
