'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations
}

export default function Team({ t }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { founder } = t.team

  return (
    <section id="team" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-purple/4 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block glass rounded-full px-4 py-1.5 text-orbit-purple text-sm font-mono mb-6 border border-orbit-purple/20"
          >
            {t.team.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            {t.team.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            {t.team.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-white/8 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-orbit-purple/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orbit-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32">
                {/* Outer orbit ring */}
                <div className="absolute inset-0 rounded-full border border-orbit-blue/30 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full border border-orbit-purple/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                {/* Avatar */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orbit-blue to-orbit-purple flex items-center justify-center">
                  <span className="text-4xl font-black text-white">В</span>
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-green-400 border-2 border-space-950">
                  <div className="w-full h-full rounded-full bg-green-400 animate-ping-slow" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-1">{founder.name}</h3>
              <p className="gradient-text font-semibold text-lg mb-5">{founder.role}</p>
              <p className="text-white/60 leading-relaxed mb-7 max-w-xl">{founder.bio}</p>

              {/* Facts grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {founder.facts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3 text-left">
                    <div className="mt-1 w-5 h-5 rounded-full bg-orbit-blue/20 border border-orbit-blue/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orbit-blue" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{fact}</span>
                  </div>
                ))}
              </div>

              {/* Contacts */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="https://t.me/VladimirKharlashko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-white/70 hover:text-[#26A5E4] hover:border-[#26A5E4]/30 text-sm font-medium transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z"/>
                  </svg>
                  @VladimirKharlashko
                </a>
                <a
                  href="https://wa.me/79169083952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-white/70 hover:text-[#25D366] hover:border-[#25D366]/30 text-sm font-medium transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
