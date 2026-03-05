import type { Metadata } from 'next'
import { isValidLang, supportedLangs, type Lang } from '@/lib/i18n'
import '../globals.css'

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

const metaByLang: Record<Lang, Metadata> = {
  ru: {
    title: 'ORBIT tec — Мультиагентные AI-системы | RAG | AI-трансформация',
    description:
      'Строим автономные мультиагентные AI-системы, RAG-базы знаний и AI-продукты. 27+ агентов в одном конвейере. Доминируем в AI для СНГ.',
  },
  en: {
    title: 'ORBIT tec — Multi-agent AI Systems | RAG | AI Transformation',
    description:
      'We build autonomous multi-agent AI systems, RAG knowledge bases and AI products. 27+ agents in one pipeline. Leading AI in CIS.',
  },
  sr: {
    title: 'ORBIT tec — AI sistemi sa više agenata | RAG | AI transformacija',
    description:
      'Gradimo autonomne sisteme sa više AI agenata, RAG baze znanja i AI proizvode. 27+ agenata u jednom konvejeru.',
  },
}

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = isValidLang(params.lang) ? params.lang : 'ru'
  return {
    ...metaByLang[lang],
    metadataBase: new URL('https://orbit-tec.ai'),
    openGraph: {
      type: 'website',
      locale: lang === 'ru' ? 'ru_RU' : lang === 'en' ? 'en_US' : 'sr_RS',
      siteName: 'ORBIT tec',
    },
  }
}

export default function LangLayout({ children, params }: Props) {
  const lang = isValidLang(params.lang) ? params.lang : 'ru'
  return (
    <html lang={lang} className="dark">
      <body>{children}</body>
    </html>
  )
}
