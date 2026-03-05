'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type Lang, langLabels, supportedLangs, type Translations } from '@/lib/i18n'

interface Props {
  lang: Lang
  t: Translations
}

export default function Navigation({ lang, t }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.howItWorks, href: '#how' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const switchLang = (newLang: Lang) => {
    router.push(`/${newLang}`)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full border border-orbit-blue/50 flex items-center justify-center group-hover:border-orbit-blue transition-colors">
              <div className="w-5 h-5 rounded-full border border-orbit-cyan/70 flex items-center justify-center animate-spin-slow">
                <div className="w-2 h-2 rounded-full bg-orbit-blue" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-orbit-blue/10 blur-md group-hover:bg-orbit-blue/20 transition-all" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">ORBIT</span>
            <span className="text-white/80"> tec</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-orbit-blue to-orbit-cyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right: lang switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Lang switcher */}
          <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1">
            {supportedLangs.map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  l === lang
                    ? 'bg-gradient-to-r from-orbit-blue to-orbit-purple text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orbit-blue to-orbit-purple text-white text-sm font-semibold hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
          >
            {t.nav.contact}
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-white/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                {supportedLangs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { switchLang(l); setMobileOpen(false) }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      l === lang ? 'bg-orbit-blue text-white' : 'text-white/50'
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
