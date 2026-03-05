export const sr = {
  lang: 'sr',
  nav: {
    services: 'Usluge',
    projects: 'Projekti',
    howItWorks: 'Kako radimo',
    about: 'O nama',
    contact: 'Kontakt',
  },
  hero: {
    badge: 'AI sistemi nove generacije sa više agenata',
    title1: 'Autonomni',
    title2: 'AI konvejer',
    title3: 'za vaše poslovanje',
    subtitle:
      'Gradimo sisteme sa više agenata koji ne spavaju. RAG baze znanja, AI transformacija poslovanja i gotovi AI proizvodi — od ideje do lansiranja.',
    cta: 'Razgovarajmo o projektu',
    ctaSecondary: 'Pogledajte projekte',
    scrollHint: 'Pomeri dole',
  },
  stats: {
    title: 'Brojevi govore sami za sebe',
    items: [
      { value: 27, suffix: '+', label: 'AI agenata u jednom konvejeru' },
      { value: 4, suffix: 'x', label: 'LLM provajdera paralelno' },
      { value: 100, suffix: '%', label: 'Autonoman rad sistema' },
      { value: 553, suffix: '+', label: 'Testova bez ijednog pada' },
    ],
  },
  services: {
    badge: 'Šta radimo',
    title: 'Kompletan AI stek rešenja',
    subtitle:
      'Od arhitekture sistema sa više agenata do gotovog AI proizvoda — pokrivamo ceo ciklus.',
    items: [
      {
        icon: 'agents',
        title: 'Sistemi sa više agenata',
        description:
          'Projektujemo i gradimo sisteme od desetina autonomnih AI agenata. Paralelno izvršavanje, orkestracija, tolerancija grešaka. Vaši zadaci se rešavaju sami — 24/7.',
        tags: ['FastAPI', 'Redis Streams', 'PostgreSQL', 'Claude/GPT-4o'],
      },
      {
        icon: 'rag',
        title: 'RAG + Graf znanja',
        description:
          'Korporativna baza znanja sa hibridnim pretraživanjem: vektorski ChromaDB + SQLite graf znanja. Claude automatski izvlači entitete i veze iz vaših dokumenata.',
        tags: ['ChromaDB', 'SQLite KG', 'MCP Server', 'Voyage AI'],
      },
      {
        icon: 'transform',
        title: 'AI transformacija',
        description:
          'Analiziramo vaše poslovne procese, identifikujemo tačke maksimalnog ROI za AI, gradimo plan transformacije i implementiramo ga po ključ.',
        tags: ['Process Mining', 'ROI Analysis', 'Custom LLM', 'Integration'],
      },
      {
        icon: 'product',
        title: 'AI proizvodi',
        description:
          'Kreiramo AI proizvode od nule: mobilne aplikacije, veb servise, automatizacije. Ceo ciklus — od ideje kroz spec, codegen, review do App Store.',
        tags: ['Flutter', 'Next.js', 'Python', 'App Store / Play'],
      },
    ],
  },
  projects: {
    badge: 'Stvarni projekti',
    title: 'Šta smo već izgradili',
    subtitle: 'Ne koncepti — sistemi koji rade u produkciji.',
    items: [
      {
        id: 'mapp',
        tag: 'Autonomna fabrika',
        title: 'mapp_conveyer',
        description:
          '27 AI agenata u mikroservisnoj arhitekturi: generišu ideje, kritikuju, pišu specifikacije, generišu Flutter kod, pregledaju, objavljuju u Play Store — potpuno autonomno. 4 modela rasuđivanja glasaju paralelno.',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', 'GPT-4o', 'Claude', 'Gemini', 'DeepSeek'],
        metrics: ['27 agenata', '553 testa', '100% auto'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Automatizacija sadržaja',
        title: 'youtube_fabric',
        description:
          'Autonomna fabrika YouTube Shorts videa: AI generiše scenarije, titlove, glasovni prikaz i objavljuje video zapise. Višejezična podrška, dosledan stil, automatizovano upravljanje kanalom.',
        tech: ['Python', 'FFmpeg', 'OpenAI TTS', 'YouTube API'],
        metrics: ['Više jezika', 'Auto-objava', '24/7'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'Orkestracija agenata',
        title: 'Agent Manager',
        description:
          'Desktop aplikacija za upravljanje višestrukim Claude Code sesijama na Windowsu. Automatsko otkrivanje, statusi AUTO/ČEKA, prebacivanje prozora putem Win32 API. Za one koji istovremeno pokreću desetine agenata.',
        tech: ['Electron', 'Node.js', 'PowerShell', 'Win32 API'],
        metrics: ['Auto-detect', 'Real-time', 'Win32'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'Baza znanja',
        title: 'RAG + Graf znanja',
        description:
          'Hibridni sistem memorije: ChromaDB za vektorsko pretraživanje + SQLite graf znanja. Claude automatski izvlači entitete i veze. MCP server za integraciju sa Claude, REST API za svaki LLM.',
        tech: ['ChromaDB', 'SQLite', 'Claude MCP', 'Streamlit', 'FastAPI'],
        metrics: ['Hibridno pretr.', 'Auto KG', 'MCP + REST'],
        gradient: 'from-purple-600 to-indigo-600',
      },
    ],
  },
  how: {
    badge: 'Proces',
    title: 'Kako radimo',
    subtitle: 'Od prvog poziva do autonomno pokrenутог sistema — strukturisan proces.',
    steps: [
      {
        num: '01',
        title: 'Dijagnoza',
        description:
          'Analiziramo vaše procese, bolne tačke i ciljeve. Identifikujemo gde AI daje maksimalan efekat. Dajemo konkretan plan.',
      },
      {
        num: '02',
        title: 'Arhitektura',
        description:
          'Projektujemo sistem sa više agenata ili AI proizvod. Biramo modele, infrastrukturu, integracije. Usaglašavamo se sa vama.',
      },
      {
        num: '03',
        title: 'Razvoj',
        description:
          'Gradimo iterativno. Svaka iteracija je radni prototip. Testovi, pregled, compliance — sve je automatizovano.',
      },
      {
        num: '04',
        title: 'Lansiranje i skaliranje',
        description:
          'Postavljamo u produkciju. Podešavamo monitoring. Sistem radi autonomno. Vi dobijate kontrolu i rezultate.',
      },
    ],
  },
  contact: {
    badge: 'Kontaktirajte nas',
    title: 'Spremni za AI revoluciju?',
    subtitle:
      'Pišite nam — razgovaraćemo o vašem zadatku, predložiti arhitekturu i proceniti rokove. Prva konsultacija je besplatna.',
    telegram: 'Pišite na Telegram',
    whatsapp: 'Pišite na WhatsApp',
    form: {
      name: 'Ime',
      namePlaceholder: 'Vladimir',
      company: 'Kompanija',
      companyPlaceholder: 'ACME d.o.o.',
      task: 'Zadatak',
      taskPlaceholder: 'Želim da automatizujem...',
      send: 'Pošaljite zahtev',
      sending: 'Slanje...',
      success: 'Zahtev poslat! Javićemo se u roku od 24 sata.',
      error: 'Greška pri slanju. Pišite direktno na Telegram.',
    },
  },
  footer: {
    tagline: 'Gradimo autonomne AI sisteme koji ne spavaju.',
    rights: 'Sva prava zadržana.',
  },
}
