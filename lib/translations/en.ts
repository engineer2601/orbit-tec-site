export const en = {
  lang: 'en',
  nav: {
    services: 'Services',
    projects: 'Projects',
    howItWorks: 'How We Work',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    badge: 'Next-generation multi-agent AI systems',
    title1: 'Autonomous',
    title2: 'AI Pipeline',
    title3: 'for your business',
    subtitle:
      'We build multi-agent systems that never sleep. RAG knowledge bases, AI business transformation, and production-ready AI products — from idea to launch.',
    cta: 'Discuss a project',
    ctaSecondary: 'View projects',
    scrollHint: 'Scroll down',
  },
  stats: {
    title: 'Numbers speak for themselves',
    items: [
      { value: 27, suffix: '+', label: 'AI agents in one pipeline' },
      { value: 4, suffix: 'x', label: 'LLM providers in parallel' },
      { value: 100, suffix: '%', label: 'Autonomous system operation' },
      { value: 553, suffix: '+', label: 'Tests with zero failures' },
    ],
  },
  services: {
    badge: 'What we do',
    title: 'Full-stack AI solutions',
    subtitle:
      'From multi-agent system architecture to production-ready AI products — we cover the entire cycle.',
    items: [
      {
        icon: 'agents',
        title: 'Multi-agent Systems',
        description:
          'We design and build systems of dozens of autonomous AI agents. Parallel execution, orchestration, fault-tolerance. Your tasks solve themselves — 24/7.',
        tags: ['FastAPI', 'Redis Streams', 'PostgreSQL', 'Claude/GPT-4o'],
      },
      {
        icon: 'rag',
        title: 'RAG + Knowledge Graph',
        description:
          'Corporate knowledge base with hybrid search: vector ChromaDB + SQLite knowledge graph. Claude automatically extracts entities and relationships from your documents.',
        tags: ['ChromaDB', 'SQLite KG', 'MCP Server', 'Voyage AI'],
      },
      {
        icon: 'transform',
        title: 'AI Transformation',
        description:
          'We analyze your business processes, identify maximum ROI points for AI, build a transformation roadmap, and implement it turnkey.',
        tags: ['Process Mining', 'ROI Analysis', 'Custom LLM', 'Integration'],
      },
      {
        icon: 'product',
        title: 'AI Products',
        description:
          'We create AI products from scratch: mobile apps, web services, automations. Full cycle — from idea through spec, codegen, review to App Store.',
        tags: ['Flutter', 'Next.js', 'Python', 'App Store / Play'],
      },
    ],
  },
  projects: {
    badge: 'Real projects',
    title: 'What we have built',
    subtitle: 'Not concepts — production systems that work.',
    items: [
      {
        id: 'mapp',
        tag: 'Autonomous Factory',
        title: 'mapp_conveyer',
        description:
          '27 AI agents in microservice architecture: generate ideas, critique, write specs, generate Flutter code, review, publish to Play Store — fully autonomously. 4 reasoning models vote in parallel.',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', 'GPT-4o', 'Claude', 'Gemini', 'DeepSeek'],
        metrics: ['27 agents', '553 tests', '100% auto'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Content Automation',
        title: 'youtube_fabric',
        description:
          'Autonomous YouTube Shorts factory: AI generates scripts, subtitles, voiceover and publishes videos. Multi-language support, consistent style, automated channel management.',
        tech: ['Python', 'FFmpeg', 'OpenAI TTS', 'YouTube API'],
        metrics: ['Multi-lang', 'Auto-publish', '24/7'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'Agent Orchestration',
        title: 'Agent Manager',
        description:
          'Desktop app for managing multiple Claude Code sessions on Windows. Auto-detection, AUTO/WAITING statuses, window switching via Win32 API. For those running dozens of agents simultaneously.',
        tech: ['Electron', 'Node.js', 'PowerShell', 'Win32 API'],
        metrics: ['Auto-detect', 'Real-time', 'Win32'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'Knowledge Base',
        title: 'RAG + Knowledge Graph',
        description:
          'Hybrid memory system: ChromaDB for vector search + SQLite knowledge graph. Claude automatically extracts entities and relationships. MCP server for Claude integration, REST API for any LLM.',
        tech: ['ChromaDB', 'SQLite', 'Claude MCP', 'Streamlit', 'FastAPI'],
        metrics: ['Hybrid search', 'Auto KG', 'MCP + REST'],
        gradient: 'from-purple-600 to-indigo-600',
      },
    ],
  },
  how: {
    badge: 'Process',
    title: 'How we work',
    subtitle: 'From the first call to an autonomously running system — a structured process.',
    steps: [
      {
        num: '01',
        title: 'Diagnosis',
        description:
          'We analyze your processes, pain points and goals. We identify where AI delivers maximum impact. We deliver a concrete plan.',
      },
      {
        num: '02',
        title: 'Architecture',
        description:
          'We design the multi-agent system or AI product. Choose models, infrastructure, integrations. Align with you.',
      },
      {
        num: '03',
        title: 'Development',
        description:
          'We build iteratively. Each iteration is a working prototype. Tests, review, compliance — all automated.',
      },
      {
        num: '04',
        title: 'Launch & Scale',
        description:
          'We deploy to production. Set up monitoring. The system runs autonomously. You get control and results.',
      },
    ],
  },
  contact: {
    badge: 'Get in touch',
    title: 'Ready for the AI revolution?',
    subtitle:
      'Write to us — we will discuss your task, propose an architecture and estimate timelines. First consultation is free.',
    telegram: 'Write on Telegram',
    whatsapp: 'Write on WhatsApp',
    form: {
      name: 'Name',
      namePlaceholder: 'Vladimir',
      company: 'Company',
      companyPlaceholder: 'ACME Corp',
      task: 'Task',
      taskPlaceholder: 'I want to automate...',
      send: 'Send request',
      sending: 'Sending...',
      success: 'Request sent! We will be in touch within 24 hours.',
      error: 'Send error. Write directly on Telegram.',
    },
  },
  footer: {
    tagline: 'Building autonomous AI systems that never sleep.',
    rights: 'All rights reserved.',
  },
}
