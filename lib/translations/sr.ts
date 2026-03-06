export const sr = {
  lang: 'sr',
  nav: {
    services: 'Usluge',
    forWhom: 'Za koga',
    projects: 'Projekti',
    team: 'Tim',
    contact: 'Konsultacija',
  },
  hero: {
    badge: 'AI automatizacija za biznis u ZND regionu',
    title1: 'Vas biznis',
    title2: 'radi sam',
    title3: 'dok vi spavate',
    subtitle:
      'Gradimo autonomne AI konvejere: jednom podesiti — sistem radi umesto 12 zaposlenih non-stop. Bez greskaka, bez slobodnih dana, bez ljudskog faktora.',
    cta: 'Besplatna AI dijagnoza',
    ctaSecondary: 'Pogledajte studije slucaja',
    scrollHint: 'Saznajte vise',
    proof: 'Vec 4 autonomna sistema u produkciji',
  },
  stats: {
    title: 'Stvarne cifre nasih sistema',
    items: [
      { value: 12, suffix: 'x', label: 'Rad toliko zaposlenih zamenjuje jedan konvejer' },
      { value: 4, suffix: '', label: 'AI modela unakrsno proveravaju svaku odluku' },
      { value: 3, suffix: ' dana', label: 'Od ideje do gotovog proizvoda umesto 6 meseci' },
      { value: 99, suffix: '%', label: 'Autonomnosti — sistem radi bez vaseg ucesce' },
    ],
  },
  services: {
    badge: 'Sta gradimo',
    title: 'Cetiri tipa AI sistema',
    subtitle: 'Svako resenje je kljuc u ruke. Dobijate sistem koji radi, a ne tehnicku dokumentaciju.',
    items: [
      {
        icon: 'agents',
        title: 'Viseagentni konvejeri',
        description:
          'Desetine AI agenata rade paralelno: jedan istrazuje, drugi pise, treci proverava, cetvrti objavljuje. Rezultat — 24/7 bez ijednog coveka u petlji. Vasi rutinski procesi prestaju da postoje.',
        result: 'Smanjenje troskova plate do 40% na automatizovanim procesima',
        tags: ['FastAPI', 'Redis Streams', 'PostgreSQL', 'Claude / GPT-4o'],
      },
      {
        icon: 'rag',
        title: 'Korporativna baza znanja',
        description:
          'AI koji zna sve o vasoj kompaniji: dokumenti, propisi, prepiska, podaci klijenata. Novi zaposleni se adaptira za dan. Klijent dobija odgovor za sekunde umesto sati.',
        result: 'Vreme odgovora klijentima: od sati do sekundi',
        tags: ['ChromaDB', 'Graf znanja', 'MCP Server', 'REST API'],
      },
      {
        icon: 'transform',
        title: 'AI transformacija biznisa',
        description:
          'Nije samo dodavanje ChatGPT-a. Analiziramo vase procese, nalazimo gde AI daje 5-10x brzinu, gradimo plan i implementiramo. Merljiv ROI za 3 meseca.',
        result: 'Povrat investicije u AI za 3-6 meseci',
        tags: ['Audit procesa', 'ROI mapa', 'Custom LLM', 'Integracije'],
      },
      {
        icon: 'product',
        title: 'AI proizvodi od nule',
        description:
          'Od poslovne ideje do mobilne aplikacije u prodavnici. Nas AI konvejer generise, proverava i objavljuje kod autonomno. Brzina razvoja 10x veca od klasicnog tima.',
        result: 'Prototip za 72 sata, MVP za 2 nedelje',
        tags: ['Flutter', 'Next.js', 'Python', 'App Store / Play Store'],
      },
    ],
  },
  forWhom: {
    badge: 'Za koga',
    title: 'Prepoznajte se',
    subtitle: 'Ako bar jedan scenario zvuci kao vasa kompanija — ima o cemu da razgovaramo.',
    items: [
      {
        icon: '🛒',
        industry: 'E-commerce i maloprodaja',
        pain: 'Obrada narudzbina, povracaja, odgovori klijentima — 5 operatera non-stop',
        result: 'AI automatski resava 80% upita. Operateri rade samo sa slozenim slucajevima',
      },
      {
        icon: '📺',
        industry: 'Mediji i sadrzaj',
        pain: 'Potrebno 30 clanaka / video klipova nedeljno, a tim isporucuje 5',
        result: 'Autonomna fabrika sadrzaja: ideja → SEO tekst → objava bez urednika',
      },
      {
        icon: '🏦',
        industry: 'Finansije i osiguranje',
        pain: 'Provera dokumenata, zahteva, skoring traje dane i zahteva pravnike',
        result: 'AI konvejer obraduje zahtev za minute, smanjuje greske na nulu',
      },
      {
        icon: '⚙️',
        industry: 'B2B SaaS i IT',
        pain: 'Zelim da dodam AI u proizvod, ali nemam ekspertizu u LLM',
        result: 'Ugradujemo AI funkcije u vas proizvod: RAG pretraga, automatizacija, preporuke',
      },
    ],
  },
  projects: {
    badge: 'Dokaz ekspertize',
    title: 'Produkcioni sistemi koji rade odmah',
    subtitle: 'Ne koncepti na slajdovima — kod, testovi, deployment. Otvorena arhitektura.',
    items: [
      {
        id: 'mapp',
        tag: 'Autonomna fabrika aplikacija',
        title: 'App Factory Conveyer',
        description:
          'Sistem od 27 AI agenata generise Flutter aplikacije i objavljuje ih na Google Play bez ucesce coveka. Ideja → kritika → specifikacija → kod → testovi → objava. Pun ciklus za 72 sata umesto 6 meseci sa timom programera.',
        businessResult: 'Time-to-market: 6 meseci → 72 sata',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', 'GPT-4o', 'Claude', 'Gemini', 'DeepSeek'],
        metrics: ['27 agenata', '553 auto-testa', '4 LLM glasaju'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Automatizacija sadrzaja',
        title: 'YouTube Content Factory',
        description:
          'Autonomna fabrika video sadrzaja: AI pise scenarij, glasovno snima, montira titlove i objavljuje Shorts. 0 urednika. Podrska za vise jezika istovremeno. Jedno podesavanje → beskrajan tok sadrzaja.',
        businessResult: 'Troskovi videa: $200 → $3 bez ucesce tima',
        tech: ['Python', 'FFmpeg', 'OpenAI TTS', 'YouTube API'],
        metrics: ['$0 za urednika', '24/7 objave', 'Vise jezika'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'Orkestracija AI tima',
        title: 'AI Agent Manager',
        description:
          'Upravljajte desetinama Claude agenata sa jednog ekrana. Status svakog agenta u realnom vremenu, brzo prebacivanje sesija, automatsko otkrivanje zadataka. Kao dispecerska konzola za vas AI tim.',
        businessResult: 'Jedan operator upravlja 20+ AI agenata istovremeno',
        tech: ['Electron', 'Node.js', 'PowerShell', 'Win32 API'],
        metrics: ['20+ agenata', 'Real-time status', '1 operator'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'Korporativna memorija',
        title: 'RAG + Graf znanja',
        description:
          'AI koji zna sve o vasoj kompaniji. Ucitate dokumente → sistem izvlaci cinjenice, gradi graf veza, odgovara na pitanja sa tacnim izvorima. Radi kao MCP alat za Claude ili putem REST API-ja.',
        businessResult: 'Onboarding novog zaposlenog: 2 nedelje → 1 dan',
        tech: ['ChromaDB', 'SQLite KG', 'Claude MCP', 'Streamlit', 'FastAPI'],
        metrics: ['Hibridna pretraga', 'Auto graf znanja', 'MCP + REST'],
        gradient: 'from-purple-600 to-indigo-600',
      },
    ],
  },
  team: {
    badge: 'Tim',
    title: 'Sa kim radite',
    subtitle: 'Ne agencija sa podizvođačima. Direktan kontakt sa ekspertom koji gradi vas projekat.',
    founder: {
      name: 'Vladimir Kharlashko',
      role: 'Osnivac, AI arhitekta',
      bio: 'Serijski AI graditelj. 5+ godina razvoja produkcijskih AI sistema. Izgradio 4 autonomna konvejera od nule — od arhitekture do deploymenta. Specijalizacija: viseagentni sistemi, RAG, autonomni razvoj softvera.',
      facts: [
        '4 autonomna AI sistema u produkciji',
        'Arhitekta 27-agentnog konvejera',
        'Ekspert za Claude, GPT-4o, Gemini, DeepSeek',
        'Gradim sisteme koji se skaliraju bez ljudi',
      ],
    },
  },
  pricing: {
    badge: 'Investicija',
    title: 'Koliko to kosta',
    subtitle: 'Transparentan model. Bez skrivenih naknada. Prvi korak je besplatan.',
    cta: 'Dobiti procenu za 24 sata',
    note: 'Tacna cena — posle 30-minutnog poziva. Prvi poziv je besplatan.',
    items: [
      {
        name: 'AI dijagnoza',
        price: 'Besplatno',
        desc: 'Analiziramo vase procese, pokazujemo gde ce AI imati maksimalan uticaj, procenjujemo ROI',
        features: ['30-minutni poziv', 'Mapa procesa', 'Procena ROI', 'Mapa puta'],
        cta: 'Zakazati',
        highlight: false,
      },
      {
        name: 'Pilotni projekat',
        price: 'od €5.000',
        desc: 'Jedan autonomni AI agent ili RAG sistem za specifican proces. Merljiv rezultat za 4 nedelje',
        features: ['1 AI agent ili RAG', '4 nedelje do rezultata', 'Kompletna podrska', 'KPI i izvestaji'],
        cta: 'Razgovarajmo o pilotu',
        highlight: true,
      },
      {
        name: 'AI transformacija',
        price: 'od €25.000',
        desc: 'Kompletan viseagentni konvejer kljuc u ruke. Zamena celog odeljenja ili poslovnog procesa',
        features: ['Viseagentna arhitektura', '3-6 meseci', 'Garancija rezultata', '12 meseci podrske'],
        cta: 'Razgovarajmo o transformaciji',
        highlight: false,
      },
    ],
  },
  how: {
    badge: 'Proces',
    title: 'Kako to funkcionise',
    subtitle: 'Od prvog poziva do sistema koji radi umesto vas — 4 jasna koraka.',
    steps: [
      {
        num: '01',
        title: 'Dijagnosticki poziv',
        description: '30 minuta. Analiziramo vase procese, pokazujemo specificne tacke automatizacije i racunamo ROI. Bez obaveza.',
      },
      {
        num: '02',
        title: 'Arhitektura sistema',
        description: 'Projektujemo konvejer: koji agenti, koji modeli, kako integrisati sa vasim sistemima. Vidite plan pre pocetka razvoja.',
      },
      {
        num: '03',
        title: 'Iterativni razvoj',
        description: 'Svake 2 nedelje — radni prirast. Vidite napredak, unosite izmene. 553+ auto-testova osiguravaju kvalitet na svakom koraku.',
      },
      {
        num: '04',
        title: 'Lansiranje i predaja',
        description: 'Postavljamo, podesavamo monitoring, obucavamo vase ljude. Sistem radi autonomno. Pratite rezultate kroz dasboard.',
      },
    ],
  },
  contact: {
    badge: 'Prvi korak je besplatan',
    title: 'Zakažite AI dijagnozu',
    subtitle: '30 minuta — i razumecete kako AI stedi vas novac i vreme. Na prvom pozivu nista ne prodajemo.',
    telegram: 'Pišite na Telegram',
    whatsapp: 'Pišite na WhatsApp',
    form: {
      name: 'Ime',
      namePlaceholder: 'Aleksandar',
      company: 'Kompanija',
      companyPlaceholder: 'd.o.o. / startup',
      task: 'Koji proces zelite da automatizujete?',
      taskPlaceholder: 'Na primer: obrada upita sa sajta traje 3 sata dnevno...',
      send: 'Zakazati dijagnozu',
      sending: 'Slanje...',
      success: 'Odlicno! Javicemo se u roku od 2 sata i dogovoriti termin.',
      error: 'Greška. Pisište direktno na Telegram — @VladimirKharlashko',
    },
  },
  footer: {
    tagline: 'Gradimo AI sisteme koji rade umesto vas 24/7.',
    rights: 'Sva prava zadrzana.',
  },
}
