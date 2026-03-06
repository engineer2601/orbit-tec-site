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
          '27 AI agenata, 11 mikroservisa. "Investicioni savet" od 4 reasoning modela paralelno (GPT-4o, Claude Opus + thinking, Gemini 2.5 Pro, DeepSeek) procenjuje svaku odluku. Konvejer: Market Intelligence → ideja → kritika → Feature Review Panel → generisanje koda → multi-agent review (QA + DevOps + Policy + Analyst) → Codemagic CI/CD → Google Play + AdMob. Auto-kill po trzisnim metrikama.',
        businessResult: 'Time-to-market: 6 meseci → 72 sata. 553 testa, 100% pass',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', '4 LLM paralelno'],
        metrics: ['27 agenata', '11 mikroservisa', '553 testa 100%'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Viseplsatformska fabrika sadrzaja',
        title: 'Autonomous Video Factory',
        description:
          'Nije samo YouTube Shorts — 8 mikroservisa, 6 platformi za objavu (YouTube, Instagram, TikTok, VK, Rutube, Pinterest), 5 TTS provajdera (Azure, ElevenLabs, HeyGen, Cartesia, Polly). AI konvejer: ideja → brifing → plan sadrzaja → scenarij → glasovna sinteza → montaza → auto-lokalizacija → istovremena objava. Kafka za dogadjaje, MinIO za skladistenje.',
        businessResult: 'Jedan sadrzaj — 6 platformi, vise jezika. Troskovi videa: $200 → $3',
        tech: ['Python/Kafka', 'MinIO/FFmpeg', 'Azure/ElevenLabs/HeyGen', '6 platformi'],
        metrics: ['6 platformi', '5 TTS provajdera', '8 mikroservisa'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'Mission Control za AI razvoj',
        title: 'AI Agent Manager',
        description:
          'Electron Mission Control aplikacija. Auto-otkrivanje svih Claude Code sesija preko WMI + filesystem. Preview razgovora u realnom vremenu, NLP detekcija kada agent ceka odgovor, zvucna obaveštenja, sistemski trej sa globalnim precicama (Ctrl+Shift+1-9), Quick Reply iz panela bez prebacivanja terminala. Arhitektura razvijena sa 4 reasoning modela paralelno.',
        businessResult: 'Jedan programer upravlja 20+ AI agenata. Vreme reakcije ~3s',
        tech: ['Electron', 'Win32 API', 'WMI', 'Web Audio API'],
        metrics: ['20+ agenata', 'NLP + zvuk', 'Hotkeys + Tray'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'Hibridna baza znanja',
        title: 'RAG + Graf znanja',
        description:
          '4-struka hibridna pretraga: Dense vektorska + BM25 kljucna rec + obilazak grafa + Reciprocal Rank Fusion. 7 konektora: Google Drive, Gmail, Yandex Disk/Mail, GitHub, Obsidian, URL. Backend: ChromaDB ili Qdrant + SQLite ili Neo4j. Intelligence sloj: Daily Briefing, Expertise Passport, Gap Analyzer, detektor kontradikcija. KG ekstrakcija sa 3-iteracijskom critic petljom. MCP server integrisan u Claude.',
        businessResult: 'Onboarding: 2 nedelje → 1 dan. Kvalitet pretrage verifikovan RAGAS-om',
        tech: ['ChromaDB/Qdrant', 'SQLite/Neo4j', 'Claude MCP', 'RAGAS eval'],
        metrics: ['7 izvora podataka', '4-struka pretraga', 'ChromaDB + Neo4j'],
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
      role: 'Osnivac · CTO · AI arhitekta',
      bio: '15+ godina kao enterprise CTO: PGK (prihod $1.5B, 150+ IT inicijativa/godišnje, direktno podredjen CEO), PARMA (650 zaposlenih, P&L ₽500M+/god), Raiffeisen Bank — VP Engineering (80+ paralelnih R&D projekata, AI i blockchain u produkciji). Arhitekta korporativne AI strategije PARMA: prosecna ustedevina ~50% radnih resursa u 20+ specijalizacija, 500+ strucnjaka. Sada gradi autonomne AI sisteme za biznis od nule.',
      facts: [
        '15 godina enterprise CTO: PGK ($1.5B), Raiffeisen, Moskovska berza',
        'AI transformacija 500+ strucnjaka: ~50% ustedevina radnih resursa',
        'Arhitekta 27-agentnog konvejera, 11 mikroservisa, 553 testa',
        'Ekspert: Claude, GPT-4o, Gemini 2.5 Pro, DeepSeek',
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
