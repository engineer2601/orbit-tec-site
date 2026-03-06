export const en = {
  lang: 'en',
  nav: {
    services: 'Services',
    forWhom: 'Who It\'s For',
    projects: 'Projects',
    team: 'Team',
    contact: 'Consultation',
  },
  hero: {
    badge: 'End-to-end AI automation for CIS businesses',
    title1: 'Your business',
    title2: 'runs itself',
    title3: 'while you sleep',
    subtitle:
      'We build autonomous AI pipelines: set it up once — the system does the work of 12 employees around the clock. No failures, no days off, no human factor.',
    cta: 'Free AI Diagnostic',
    ctaSecondary: 'View case studies',
    scrollHint: 'Learn more',
    proof: 'Already 4 autonomous systems in production',
  },
  stats: {
    title: 'Real numbers from our systems',
    items: [
      { value: 12, suffix: 'x', label: 'Employees\' work replaced by one pipeline' },
      { value: 4, suffix: '', label: 'AI models cross-check every decision' },
      { value: 3, suffix: ' days', label: 'From idea to finished product instead of 6 months' },
      { value: 99, suffix: '%', label: 'Autonomy — the system works without your involvement' },
    ],
  },
  services: {
    badge: 'What we build',
    title: 'Four types of AI systems',
    subtitle: 'Every solution is turnkey. You get a working system, not technical documentation.',
    items: [
      {
        icon: 'agents',
        title: 'Multi-agent pipelines',
        description:
          'Dozens of AI agents work in parallel: one researches, one writes, one validates, one publishes. The result — 24/7 without a single human in the loop. Your routine processes cease to exist.',
        result: 'Up to 40% payroll reduction on automated processes',
        tags: ['FastAPI', 'Redis Streams', 'PostgreSQL', 'Claude / GPT-4o'],
      },
      {
        icon: 'rag',
        title: 'Corporate knowledge base',
        description:
          'AI that knows everything about your company: documents, regulations, correspondence, client data. A new employee adapts in a day. A client gets an answer in seconds instead of hours.',
        result: 'Client response time from hours to seconds',
        tags: ['ChromaDB', 'Knowledge Graph', 'MCP Server', 'REST API'],
      },
      {
        icon: 'transform',
        title: 'AI business transformation',
        description:
          'Not just plugging in ChatGPT. We analyze your processes, find where AI gives 5-10x speed, build a roadmap and implement it. Measurable ROI within 3 months.',
        result: 'Return on AI investment in 3-6 months',
        tags: ['Process Audit', 'ROI Map', 'Custom LLM', 'Integrations'],
      },
      {
        icon: 'product',
        title: 'AI products from scratch',
        description:
          'From business idea to mobile app in the store. Our AI pipeline generates, validates and publishes code autonomously. Development speed 10x faster than a classic team.',
        result: 'Prototype in 72 hours, MVP in 2 weeks',
        tags: ['Flutter', 'Next.js', 'Python', 'App Store / Play Store'],
      },
    ],
  },
  forWhom: {
    badge: 'Who it\'s for',
    title: 'Recognize yourself',
    subtitle: 'If at least one scenario sounds like your company — we have something to discuss.',
    items: [
      {
        icon: '🛒',
        industry: 'E-commerce & Retail',
        pain: 'Processing orders, returns, customer replies — 5 operators around the clock',
        result: 'AI handles 80% of requests automatically. Operators only deal with complex cases',
      },
      {
        icon: '📺',
        industry: 'Media & Content',
        pain: 'Need 30 articles / videos per week, but the team delivers 5',
        result: 'Autonomous content factory: idea → SEO article → publish with no editor involved',
      },
      {
        icon: '🏦',
        industry: 'Fintech & Insurance',
        pain: 'Document verification, applications, scoring take days and require lawyers',
        result: 'AI pipeline processes an application in minutes, reduces errors to zero',
      },
      {
        icon: '⚙️',
        industry: 'B2B SaaS & IT',
        pain: 'Want to add AI to the product but lack LLM expertise',
        result: 'We embed AI features into your product: RAG search, automation, smart recommendations',
      },
    ],
  },
  projects: {
    badge: 'Proof of expertise',
    title: 'Production systems running right now',
    subtitle: 'Not slide concepts — code, tests, deployment. Open architecture.',
    items: [
      {
        id: 'mapp',
        tag: 'Autonomous app factory',
        title: 'App Factory Conveyer',
        description:
          '27 AI agents, 11 microservices. An "investment board" of 4 reasoning models in parallel (GPT-4o, Claude Opus + thinking, Gemini 2.5 Pro, DeepSeek) evaluates every decision. Pipeline: Market Intelligence → idea → critique → Feature Review Panel → code generation → multi-agent review (QA + DevOps + Policy + Analyst) → Codemagic CI/CD → Google Play + AdMob. Auto-kill by market metrics.',
        businessResult: 'Time-to-market: 6 months → 72 hours. 553 tests, 100% pass',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', '4 LLMs in parallel'],
        metrics: ['27 agents', '11 microservices', '553 tests 100%'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Multi-platform content factory',
        title: 'Autonomous Video Factory',
        description:
          'Not just YouTube Shorts — 8 microservices, 6 publishing platforms (YouTube, Instagram, TikTok, VK, Rutube, Pinterest), 5 TTS providers (Azure, ElevenLabs, HeyGen, Cartesia, Polly). AI pipeline: idea → brief → content plan → script → voiceover → editing → auto-localization → simultaneous publishing. Kafka for events, MinIO for storage.',
        businessResult: 'One content piece — 6 platforms, multiple languages. Video cost: $200 → $3',
        tech: ['Python/Kafka', 'MinIO/FFmpeg', 'Azure/ElevenLabs/HeyGen', '6 platforms'],
        metrics: ['6 platforms', '5 TTS providers', '8 microservices'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'Mission Control for AI development',
        title: 'AI Agent Manager',
        description:
          'Electron Mission Control app. Auto-discovers all Claude Code sessions via WMI + filesystem. Real-time conversation preview, NLP detection of when an agent is waiting for a reply, sound notifications, system tray with global hotkeys (Ctrl+Shift+1-9), Quick Reply from the panel without switching terminals. Architecture designed with 4 reasoning models in parallel.',
        businessResult: 'One developer manages 20+ AI agents. Response time to agent request ~3s',
        tech: ['Electron', 'Win32 API', 'WMI', 'Web Audio API'],
        metrics: ['20+ agents', 'NLP + sound', 'Hotkeys + Tray'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'Hybrid knowledge base',
        title: 'RAG + Knowledge Graph',
        description:
          '4-way hybrid search: Dense vector + BM25 keyword + graph traversal + Reciprocal Rank Fusion. 7 connectors: Google Drive, Gmail, Yandex Disk/Mail, GitHub, Obsidian, URL. Backend: ChromaDB or Qdrant + SQLite or Neo4j. Intelligence layer: Daily Briefing, Expertise Passport, Gap Analyzer, contradiction detector. KG extraction with 3-iteration critic loop. MCP server integrated with Claude.',
        businessResult: 'Onboarding: 2 weeks → 1 day. Search quality verified by RAGAS',
        tech: ['ChromaDB/Qdrant', 'SQLite/Neo4j', 'Claude MCP', 'RAGAS eval'],
        metrics: ['7 data sources', '4-way search', 'ChromaDB + Neo4j'],
        gradient: 'from-purple-600 to-indigo-600',
      },
    ],
  },
  team: {
    badge: 'Team',
    title: 'Who you\'ll work with',
    subtitle: 'Not an agency with subcontractors. Direct contact with the expert building your project.',
    founder: {
      name: 'Vladimir Kharlashko',
      role: 'Founder, AI Architect',
      bio: 'Serial AI builder. 5+ years developing production AI systems. Built 4 autonomous pipelines from scratch — from architecture to deployment. Specialization: multi-agent systems, RAG, autonomous software development.',
      facts: [
        '4 autonomous AI systems in production',
        'Architect of a 27-agent pipeline',
        'Expert in Claude, GPT-4o, Gemini, DeepSeek',
        'Building systems that scale without people',
      ],
    },
  },
  pricing: {
    badge: 'Investment',
    title: 'How much does it cost',
    subtitle: 'Transparent model. No hidden fees. First step is free.',
    cta: 'Get estimate in 24 hours',
    note: 'Exact cost — after a 30-minute call. First call is free.',
    items: [
      {
        name: 'AI Diagnostic',
        price: 'Free',
        desc: 'We analyze your processes, show where AI will have maximum impact, estimate ROI',
        features: ['30-minute call', 'Process map', 'ROI estimate', 'Roadmap'],
        cta: 'Schedule',
        highlight: false,
      },
      {
        name: 'Pilot Project',
        price: 'from $6,000',
        desc: 'One autonomous AI agent or RAG system for a specific process. Measurable result in 4 weeks',
        features: ['1 AI agent or RAG', '4 weeks to results', 'Full support', 'KPIs & reporting'],
        cta: 'Discuss pilot',
        highlight: true,
      },
      {
        name: 'AI Transformation',
        price: 'from $25,000',
        desc: 'Full multi-agent pipeline turnkey. Replacing an entire department or business process',
        features: ['Multi-agent architecture', '3-6 months', 'Result guarantee', '12 months support'],
        cta: 'Discuss transformation',
        highlight: false,
      },
    ],
  },
  how: {
    badge: 'Process',
    title: 'How it happens',
    subtitle: 'From the first call to a system that works for you — 4 clear steps.',
    steps: [
      {
        num: '01',
        title: 'Diagnostic call',
        description: '30 minutes. We analyze your processes, show specific automation points and calculate ROI. No obligations.',
      },
      {
        num: '02',
        title: 'System architecture',
        description: 'We design the pipeline: which agents, which models, how to integrate with your systems. You see the plan before development starts.',
      },
      {
        num: '03',
        title: 'Iterative development',
        description: 'Every 2 weeks — a working increment. You see progress, make adjustments. 553+ auto-tests ensure quality at every step.',
      },
      {
        num: '04',
        title: 'Launch & handover',
        description: 'We deploy, set up monitoring, train your people. The system runs autonomously. You track results through a dashboard.',
      },
    ],
  },
  contact: {
    badge: 'First step is free',
    title: 'Book your AI diagnostic',
    subtitle: '30 minutes — and you\'ll understand how AI saves you money and time. We don\'t sell on the first call.',
    telegram: 'Write on Telegram',
    whatsapp: 'Write on WhatsApp',
    form: {
      name: 'Name',
      namePlaceholder: 'Alexander',
      company: 'Company',
      companyPlaceholder: 'LLC / startup',
      task: 'What process do you want to automate?',
      taskPlaceholder: 'For example: processing website leads takes 3 hours a day...',
      send: 'Schedule diagnostic',
      sending: 'Sending...',
      success: 'Great! We\'ll be in touch within 2 hours to schedule a time.',
      error: 'Error. Write directly on Telegram — @VladimirKharlashko',
    },
  },
  footer: {
    tagline: 'Building AI systems that work for you 24/7.',
    rights: 'All rights reserved.',
  },
}
