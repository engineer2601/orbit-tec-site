export const ru = {
  lang: 'ru',
  nav: {
    services: 'Услуги',
    projects: 'Проекты',
    howItWorks: 'Как мы работаем',
    about: 'О нас',
    contact: 'Связаться',
  },
  hero: {
    badge: 'Мультиагентные AI-системы нового поколения',
    title1: 'Автономный',
    title2: 'AI-конвейер',
    title3: 'для вашего бизнеса',
    subtitle:
      'Мы строим мультиагентные системы, которые работают без сна. RAG-базы знаний, AI-трансформация бизнеса и готовые AI-продукты — от идеи до production.',
    cta: 'Обсудить проект',
    ctaSecondary: 'Смотреть проекты',
    scrollHint: 'Прокрути вниз',
  },
  stats: {
    title: 'Цифры говорят сами',
    items: [
      { value: 27, suffix: '+', label: 'AI-агентов в одном конвейере' },
      { value: 4, suffix: 'x', label: 'Провайдера LLM параллельно' },
      { value: 100, suffix: '%', label: 'Автономная работа систем' },
      { value: 553, suffix: '+', label: 'Тестов без единого провала' },
    ],
  },
  services: {
    badge: 'Что мы делаем',
    title: 'Полный стек AI-решений',
    subtitle:
      'От архитектуры мультиагентных систем до готового AI-продукта в production — мы закрываем весь цикл.',
    items: [
      {
        icon: 'agents',
        title: 'Мультиагентные системы',
        description:
          'Проектируем и строим системы из десятков автономных AI-агентов. Параллельное выполнение, оркестрация, fault-tolerance. Ваши задачи решаются сами — 24/7.',
        tags: ['FastAPI', 'Redis Streams', 'PostgreSQL', 'Claude/GPT-4o'],
      },
      {
        icon: 'rag',
        title: 'RAG + Knowledge Graph',
        description:
          'Корпоративная база знаний с гибридным поиском: векторный ChromaDB + граф знаний SQLite. Claude автоматически извлекает сущности и связи из ваших документов.',
        tags: ['ChromaDB', 'SQLite KG', 'MCP Server', 'Voyage AI'],
      },
      {
        icon: 'transform',
        title: 'AI-трансформация',
        description:
          'Анализируем ваши бизнес-процессы, находим точки максимального ROI от AI, строим дорожную карту внедрения и реализуем её под ключ.',
        tags: ['Process Mining', 'ROI Analysis', 'Custom LLM', 'Integration'],
      },
      {
        icon: 'product',
        title: 'AI-продукты',
        description:
          'Создаём AI-продукты с нуля: мобильные приложения, веб-сервисы, автоматизации. Полный цикл — от идеи через spec, codegen, review до App Store.',
        tags: ['Flutter', 'Next.js', 'Python', 'App Store / Play'],
      },
    ],
  },
  projects: {
    badge: 'Реальные проекты',
    title: 'Что мы уже построили',
    subtitle: 'Не концепты — работающие системы в production.',
    items: [
      {
        id: 'mapp',
        tag: 'Автономная фабрика',
        title: 'mapp_conveyer',
        description:
          '27 AI-агентов в микросервисной архитектуре: генерируют идеи, критикуют, пишут спецификации, генерируют Flutter-код, проверяют, публикуют в Play Store — полностью автономно. 4 модели рассуждений голосуют параллельно.',
        tech: ['Python/FastAPI', 'Redis Streams', 'PostgreSQL', 'GPT-4o', 'Claude', 'Gemini', 'DeepSeek'],
        metrics: ['27 агентов', '553 теста', '100% auto'],
        gradient: 'from-blue-600 to-purple-600',
      },
      {
        id: 'yt',
        tag: 'Контент-автоматизация',
        title: 'youtube_fabric',
        description:
          'Автономная фабрика YouTube Shorts: AI генерирует сценарии, субтитры, озвучку и публикует ролики. Мультиязычная поддержка, согласованный стиль, автоматическое управление каналом.',
        tech: ['Python', 'FFmpeg', 'OpenAI TTS', 'YouTube API'],
        metrics: ['Multi-lang', 'Auto-publish', '24/7'],
        gradient: 'from-red-500 to-orange-500',
      },
      {
        id: 'orch',
        tag: 'Оркестрация агентов',
        title: 'Agent Manager',
        description:
          'Desktop-приложение для управления множественными сессиями Claude Code на Windows. Автообнаружение, статусы АВТО/ОЖИДАЕТ, переключение окон через Win32 API. Для тех, кто запускает десятки агентов одновременно.',
        tech: ['Electron', 'Node.js', 'PowerShell', 'Win32 API'],
        metrics: ['Auto-detect', 'Real-time', 'Win32'],
        gradient: 'from-green-500 to-cyan-500',
      },
      {
        id: 'rag',
        tag: 'База знаний',
        title: 'RAG + Knowledge Graph',
        description:
          'Гибридная система памяти: ChromaDB для векторного поиска + граф знаний на SQLite. Claude автоматически извлекает сущности и связи. MCP-сервер для интеграции с Claude, REST API для любого LLM.',
        tech: ['ChromaDB', 'SQLite', 'Claude MCP', 'Streamlit', 'FastAPI'],
        metrics: ['Hybrid search', 'Auto KG', 'MCP + REST'],
        gradient: 'from-purple-600 to-indigo-600',
      },
    ],
  },
  how: {
    badge: 'Процесс',
    title: 'Как мы работаем',
    subtitle: 'От первого звонка до автономно работающей системы — структурированный процесс.',
    steps: [
      {
        num: '01',
        title: 'Диагностика',
        description:
          'Разбираем ваши процессы, боли и цели. Определяем, где AI даст максимальный эффект. Выдаём конкретный план.',
      },
      {
        num: '02',
        title: 'Архитектура',
        description:
          'Проектируем мультиагентную систему или AI-продукт. Выбираем модели, инфраструктуру, интеграции. Согласовываем с вами.',
      },
      {
        num: '03',
        title: 'Разработка',
        description:
          'Строим итерационно. Каждая итерация — рабочий прототип. Тесты, ревью, compliance — всё автоматизировано.',
      },
      {
        num: '04',
        title: 'Запуск и масштаб',
        description:
          'Деплоим в production. Настраиваем мониторинг. Система работает автономно. Вы получаете контроль и результат.',
      },
    ],
  },
  contact: {
    badge: 'Связаться',
    title: 'Готовы к AI-революции?',
    subtitle:
      'Напишите нам — обсудим вашу задачу, предложим архитектуру и оценим сроки. Первая консультация бесплатно.',
    telegram: 'Написать в Telegram',
    whatsapp: 'Написать в WhatsApp',
    form: {
      name: 'Имя',
      namePlaceholder: 'Владимир',
      company: 'Компания',
      companyPlaceholder: 'ООО Рога и Копыта',
      task: 'Задача',
      taskPlaceholder: 'Хочу автоматизировать...',
      send: 'Отправить заявку',
      sending: 'Отправляем...',
      success: 'Заявка отправлена! Свяжемся в течение 24 часов.',
      error: 'Ошибка отправки. Напишите напрямую в Telegram.',
    },
  },
  footer: {
    tagline: 'Строим автономные AI-системы, которые работают без сна.',
    rights: 'Все права защищены.',
  },
}
