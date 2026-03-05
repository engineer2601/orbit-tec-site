'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations
}

const PROJECT_ICONS: Record<string, string> = {
  mapp: '🤖',
  yt: '🎬',
  orch: '⚙️',
  rag: '🧠',
}

export default function Projects({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-purple/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block glass rounded-full px-4 py-1.5 text-orbit-purple text-sm font-mono mb-6 border border-orbit-purple/20"
          >
            {t.projects.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t.projects.title.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="gradient-text">{t.projects.title.split(' ').slice(2).join(' ')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 cursor-default"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white/70 mb-3 border border-white/10`}>
                      {project.tag}
                    </span>
                    <h3 className="text-2xl font-black text-white font-mono group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={activeIdx === i ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl"
                  >
                    {PROJECT_ICONS[project.id]}
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-3 mb-6">
                  {project.metrics.map((m) => (
                    <div
                      key={m}
                      className={`flex-1 text-center py-2 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 border border-white/5`}
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      <div className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {m}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-white/40 border border-white/5 group-hover:text-white/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated corner glow */}
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl pointer-events-none`}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
