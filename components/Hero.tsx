'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations
}

const TYPEWRITER_PHRASES: Record<string, string[]> = {
  ru: ['работает без сна', 'мыслит параллельно', 'автоматизирует всё', 'масштабируется сам'],
  en: ['never sleeps', 'thinks in parallel', 'automates everything', 'scales itself'],
  sr: ['ne spava', 'misli paralelno', 'automatizuje sve', 'skalira se samo'],
}

export default function Hero({ t }: Props) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  const phrases = TYPEWRITER_PHRASES[t.lang] ?? TYPEWRITER_PHRASES.ru

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2500)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setDeleting(false)
        setPhraseIdx((phraseIdx + 1) % phrases.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, phraseIdx, phrases])

  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(interval)
  }, [])

  const floatingCards = [
    { icon: '⚡', label: t.lang === 'ru' ? 'Работа 12 сотрудников' : t.lang === 'en' ? '12 employees work' : '12 zaposlenih', sub: t.lang === 'ru' ? 'один конвейер' : t.lang === 'en' ? 'one pipeline' : 'jedan konvejer', pos: 'top-[20%] right-[6%]', delay: 0 },
    { icon: '🔄', label: t.lang === 'ru' ? '72 часа' : t.lang === 'en' ? '72 hours' : '72 sata', sub: t.lang === 'ru' ? 'вместо 6 месяцев' : t.lang === 'en' ? 'instead of 6 months' : 'umesto 6 meseci', pos: 'top-[55%] right-[4%]', delay: 0.4 },
    { icon: '🧠', label: t.lang === 'ru' ? '4 AI-модели' : t.lang === 'en' ? '4 AI models' : '4 AI modela', sub: t.lang === 'ru' ? 'проверяют друг друга' : t.lang === 'en' ? 'cross-check each other' : 'unakrsno proveravaju', pos: 'top-[25%] left-[4%]', delay: 0.2 },
    { icon: '✅', label: t.lang === 'ru' ? '99% автономно' : t.lang === 'en' ? '99% autonomous' : '99% autonomno', sub: t.lang === 'ru' ? 'без вашего участия' : t.lang === 'en' ? 'without your input' : 'bez vaseg ucesce', pos: 'top-[60%] left-[3%]', delay: 0.6 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + card.delay, duration: 0.5 }}
          className={`absolute ${card.pos} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
            className="glass rounded-2xl px-4 py-3 border border-white/10 hover:border-orbit-blue/30 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{card.icon}</span>
              <div>
                <div className="text-white font-bold text-sm">{card.label}</div>
                <div className="text-white/40 text-xs">{card.sub}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orbit-blue/4 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orbit-purple/4 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-orbit-blue/20"
        >
          <span className="w-2 h-2 rounded-full bg-orbit-cyan animate-pulse" />
          <span className="text-orbit-cyan text-sm font-medium">{t.hero.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4"
        >
          <span className="block text-white/70 text-3xl md:text-4xl font-bold mb-2">{t.hero.title1}</span>
          <span className="block gradient-text">{t.hero.title2}</span>
          <span className="block text-white/50 text-3xl md:text-4xl font-bold mt-2">{t.hero.title3}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl font-mono text-orbit-cyan mb-6 h-9 flex items-center justify-center"
        >
          <span className="neon-cyan">{displayed}</span>
          <span className="inline-block w-0.5 h-6 bg-orbit-cyan ml-1 align-middle" style={{ opacity: blink ? 1 : 0 }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-orbit-cyan/70 text-sm font-mono mb-10"
        >
          ✓ {t.hero.proof}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orbit-blue to-orbit-purple text-white font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.cta}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orbit-purple to-orbit-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full glass border border-white/15 text-white font-semibold text-lg hover:border-orbit-blue/50 hover:bg-orbit-blue/10 transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs"
        >
          <span>{t.hero.scrollHint}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
