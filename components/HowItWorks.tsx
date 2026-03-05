'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations
}

const STEP_COLORS = [
  { border: 'border-orbit-blue', text: 'text-orbit-blue', glow: 'shadow-glow-blue', bg: 'bg-orbit-blue/10' },
  { border: 'border-orbit-purple', text: 'text-orbit-purple', glow: 'shadow-glow-purple', bg: 'bg-orbit-purple/10' },
  { border: 'border-orbit-cyan', text: 'text-orbit-cyan', glow: 'shadow-glow-cyan', bg: 'bg-orbit-cyan/10' },
  { border: 'border-emerald-400', text: 'text-emerald-400', glow: '', bg: 'bg-emerald-400/10' },
]

export default function HowItWorks({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="how" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block glass rounded-full px-4 py-1.5 text-orbit-cyan text-sm font-mono mb-6 border border-orbit-cyan/20"
          >
            {t.how.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="gradient-text">{t.how.title}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            {t.how.subtitle}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orbit-blue/30 via-orbit-purple/30 to-orbit-cyan/30 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.how.steps.map((step, i) => {
              const c = STEP_COLORS[i]
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className={`relative group ${isLeft ? 'lg:pr-16' : 'lg:pl-16 lg:mt-24'}`}
                >
                  <div className={`glass rounded-3xl p-8 border ${c.border} border-opacity-20 hover:border-opacity-50 transition-all duration-500`}>
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${c.bg} border ${c.border} border-opacity-30 mb-6 group-hover:scale-110 transition-transform`}>
                      <span className={`text-2xl font-black font-mono ${c.text}`}>{step.num}</span>
                    </div>

                    <h3 className={`text-2xl font-bold mb-4 ${c.text}`}>{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.description}</p>

                    {/* Arrow indicator */}
                    {i < t.how.steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 lg:hidden">
                        <div className={`w-px h-8 bg-gradient-to-b ${c.text} opacity-30`} />
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
