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
          'A system of 27 AI agents generates Flutter apps and publishes them to Google Play without human involvement. Idea → critique → spec → code → tests → publish. Full cycle in 72 hours instead of 6 months with a dev team.',
        businessResult: 'Time-to-market: 6 months → 72 hours',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', 'GPT-4o', 'Claude', 'Gemini', 'DeepSeek'],
        metrics: ['27 agents', '553 auto-tests', '4 LLMs vote'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Content automation',
        title: 'YouTube Content Factory',
        description:
          'Autonomous video content factory: AI writes the script, voices it, edits subtitles and publishes Shorts. 0 editors. Multi-language support simultaneously. One setup → infinite content stream.',
        businessResult: 'Video cost: $200 → $3 with zero team involvement',
        tech: ['Python', 'FFmpeg', 'OpenAI TTS', 'YouTube API'],
        metrics: ['$0 editor cost', '24/7 publishing', 'Multi-lang'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'AI team orchestration',
        title: 'AI Agent Manager',
        description:
          'Manage dozens of Claude agents from one screen. Real-time status of each agent, quick session switching, auto task detection. Like a dispatch console for your AI team.',
        businessResult: 'One operator manages 20+ AI agents simultaneously',
        tech: ['Electron', 'Node.js', 'PowerShell', 'Win32 API'],
        metrics: ['20+ agents', 'Real-time status', '1 operator'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'Corporate memory',
        title: 'RAG + Knowledge Graph',
        description:
          'AI that knows everything about your company. Upload documents → system extracts facts, builds a relationship graph, answers questions with precise sources. Works as an MCP tool for Claude or via REST API.',
        businessResult: 'New employee onboarding: 2 weeks → 1 day',
        tech: ['ChromaDB', 'SQLite KG', 'Claude MCP', 'Streamlit', 'FastAPI'],
        metrics: ['Hybrid search', 'Auto knowledge graph', 'MCP + REST'],
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
