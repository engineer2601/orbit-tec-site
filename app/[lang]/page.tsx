import { isValidLang, getT, type Lang } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import OrbitalBackground from '@/components/OrbitalBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import ForWhom from '@/components/ForWhom'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

interface Props {
  params: { lang: string }
}

export default function HomePage({ params }: Props) {
  if (!isValidLang(params.lang)) notFound()
  const lang = params.lang as Lang
  const t = getT(lang)

  return (
    <main className="relative min-h-screen bg-space-950 overflow-hidden">
      <OrbitalBackground />
      <div className="relative z-10">
        <Navigation lang={lang} t={t} />
        <Hero t={t} />
        <Stats t={t} />
        <Services t={t} />
        <ForWhom t={t} />
        <Projects t={t} />
        <Team t={t} />
        <Pricing t={t} />
        <HowItWorks t={t} />
        <Contact t={t} />
        <Footer t={t} lang={lang} />
      </div>
    </main>
  )
}
