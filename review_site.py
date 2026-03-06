"""
Multi-AI review of ORBIT tec site from 4 roles
Each AI evaluates from ALL roles simultaneously
"""
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import urllib.request, urllib.error, json, re, threading, time

import os
# API keys — set via env or keys file
def _load_keys():
    kf = r'C:\dev\ключи.txt'
    keys = {}
    try:
        for line in open(kf, encoding='utf-8'):
            line = line.strip()
            if 'deep seek' in line.lower(): keys['deepseek'] = line.split()[-1]
            elif 'gemini' in line.lower(): keys['gemini'] = line.split()[-1]
            elif 'claude' in line.lower(): keys['claude'] = line.split()[-1]
            elif 'OPENAI_API_KEY' in line: keys['openai'] = line.split('=')[-1]
    except Exception: pass
    return keys
_k = _load_keys()
OPENAI_KEY = os.environ.get('OPENAI_API_KEY', _k.get('openai', ''))
ANTHROPIC_KEY = os.environ.get('ANTHROPIC_API_KEY', _k.get('claude', ''))
GEMINI_KEY = os.environ.get('GEMINI_API_KEY', _k.get('gemini', ''))
DEEPSEEK_KEY = os.environ.get('DEEPSEEK_API_KEY', _k.get('deepseek', ''))

SITE_URL = 'http://95.81.99.189'

SITE_DESCRIPTION = """
САЙТ: ORBIT tec (http://95.81.99.189/)
КОМПАНИЯ: AI-консалтинг и разработка, СНГ-рынок

=== ДИЗАЙН ===
- Тёмный космический фон (#020212) с орбитальной particle-анимацией на Canvas
- Частицы вращаются по орбитам, реагируют на движение мыши, соединяются линиями
- Glassmorphism карточки с backdrop-blur
- Gradient text (blue→cyan→purple), neon glow эффекты
- Шрифты: Inter (body) + JetBrains Mono (теги, метрики)
- 3 языка: RU/EN/SR с переключателем в навигации

=== СЕКЦИИ ===
1. HERO: "Автономный AI-конвейер для вашего бизнеса"
   Typewriter: "работает без сна" / "мыслит параллельно" / "автоматизирует всё" / "масштабируется сам"
   Плавающие карточки: 27 AI agents, 4 LLM models, RAG+KG, 553 tests
   CTA: "Обсудить проект" + "Смотреть проекты"

2. STATS (анимированные счётчики):
   - 27+ AI-агентов в одном конвейере
   - 4x провайдера LLM параллельно
   - 100% автономная работа систем
   - 553+ тестов без единого провала

3. SERVICES (4 карточки):
   - Мультиагентные системы
   - RAG + Knowledge Graph
   - AI-трансформация
   - AI-продукты

4. PROJECTS (4 карточки):
   - mapp_conveyer: 27 AI-агентов, фабрика Android-приложений
   - youtube_fabric: автономная фабрика YouTube Shorts
   - Agent Manager: управление сессиями Claude Code
   - RAG+KG: гибридная база знаний (ChromaDB + граф)

5. HOW IT WORKS: 4 шага (Диагностика → Архитектура → Разработка → Запуск)

6. CONTACT: кнопки Telegram (@VladimirKharlashko) + WhatsApp (+79169083952) + форма

7. FOOTER: логотип, соцсети, копирайт 2026

=== ТЕКУЩИЕ ОГРАНИЧЕНИЯ ===
- Нет кейсов клиентов (только собственные проекты)
- Нет цен / тарифов
- Нет team-раздела (нет фото и биографий)
- Нет отзывов
- Домен не подключён, только IP
"""

ROLES = """
Ты должен оценить этот сайт ОДНОВРЕМЕННО от имени ЧЕТЫРЁХ ролей. По каждой роли — отдельный блок.

=== РОЛИ ===

🎯 РОЛЬ 1: CEO / ДИРЕКТОР БИЗНЕСА (потенциальный клиент)
Владелец компании с оборотом 50-500 млн руб/год. Хочет автоматизировать бизнес-процессы через AI.
Оценивает: доверие, понятность предложения, убедительность, хочется ли связаться.

🎨 РОЛЬ 2: UX/UI ДИЗАЙНЕР (эксперт по интерфейсам)
Senior дизайнер с 8 годами опыта. Работал в Яндексе и крупных студиях.
Оценивает: визуальную концепцию, UX-логику, типографику, навигацию, мобильность, WOW-фактор.

📣 РОЛЬ 3: МАРКЕТОЛОГ / КОПИРАЙТЕР
Специалист по продающим лендингам и B2B-маркетингу.
Оценивает: заголовки, позиционирование, ценностное предложение, конверсионность, доверие.

⚙️ РОЛЬ 4: ТЕХНИЧЕСКИЙ ДИРЕКТОР (CTO) потенциального клиента
Понимает в технологиях, скептически относится к хайпу. Проверяет адекватность заявлений.
Оценивает: реалистичность цифр, технический авторитет, глубину экспертизы.
"""

PROMPT = f"""
{ROLES}

=== ОПИСАНИЕ САЙТА ===
{SITE_DESCRIPTION}

=== ФОРМАТ ОТВЕТА ===
Для каждой роли:
**[EMOJI РОЛЬ N: НАЗВАНИЕ РОЛИ]**
Первое впечатление: ...
Что понравилось: ...
Что мешает / красные флаги: ...
Конкретные предложения по улучшению: ...
Итоговая оценка: X/10

---

Будь честным и конкретным. Не лести. Укажи реальные слабые места.
Отвечай на русском языке.
"""


def call_openai(results):
    try:
        data = json.dumps({
            "model": "gpt-4o",
            "messages": [{"role": "user", "content": PROMPT}],
            "max_tokens": 2000,
            "temperature": 0.7
        }).encode('utf-8')
        req = urllib.request.Request(
            'https://api.openai.com/v1/chat/completions',
            data=data,
            headers={
                'Authorization': f'Bearer {OPENAI_KEY}',
                'Content-Type': 'application/json',
                'User-Agent': 'orbit-review'
            }
        )
        resp = urllib.request.urlopen(req, timeout=60)
        d = json.loads(resp.read())
        results['openai'] = d['choices'][0]['message']['content']
    except Exception as e:
        results['openai'] = f'ERROR: {e}'


def call_anthropic(results):
    try:
        data = json.dumps({
            "model": "claude-opus-4-6",
            "max_tokens": 2000,
            "messages": [{"role": "user", "content": PROMPT}]
        }).encode('utf-8')
        req = urllib.request.Request(
            'https://api.anthropic.com/v1/messages',
            data=data,
            headers={
                'x-api-key': ANTHROPIC_KEY,
                'anthropic-version': '2023-06-01',
                'Content-Type': 'application/json',
                'User-Agent': 'orbit-review'
            }
        )
        resp = urllib.request.urlopen(req, timeout=60)
        d = json.loads(resp.read())
        results['anthropic'] = d['content'][0]['text']
    except Exception as e:
        results['anthropic'] = f'ERROR: {e}'


def call_gemini(results):
    try:
        data = json.dumps({
            "contents": [{"parts": [{"text": PROMPT}]}],
            "generationConfig": {"maxOutputTokens": 2000, "temperature": 0.7}
        }).encode('utf-8')
        url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_KEY}'
        req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
        resp = urllib.request.urlopen(req, timeout=60)
        d = json.loads(resp.read())
        results['gemini'] = d['candidates'][0]['content']['parts'][0]['text']
    except Exception as e:
        results['gemini'] = f'ERROR: {e}'


def call_deepseek(results):
    try:
        data = json.dumps({
            "model": "deepseek-chat",
            "messages": [{"role": "user", "content": PROMPT}],
            "max_tokens": 2000,
            "temperature": 0.7
        }).encode('utf-8')
        req = urllib.request.Request(
            'https://api.deepseek.com/chat/completions',
            data=data,
            headers={
                'Authorization': f'Bearer {DEEPSEEK_KEY}',
                'Content-Type': 'application/json',
                'User-Agent': 'orbit-review'
            }
        )
        resp = urllib.request.urlopen(req, timeout=60)
        d = json.loads(resp.read())
        results['deepseek'] = d['choices'][0]['message']['content']
    except Exception as e:
        results['deepseek'] = f'ERROR: {e}'


print("=" * 80)
print("MULTI-AI REVIEW: ORBIT tec Landing Page")
print("4 нейросети x 4 роли одновременно")
print("=" * 80)
print()

results = {}
threads = [
    threading.Thread(target=call_openai, args=(results,)),
    threading.Thread(target=call_anthropic, args=(results,)),
    threading.Thread(target=call_gemini, args=(results,)),
    threading.Thread(target=call_deepseek, args=(results,)),
]

print("Опрашиваем GPT-4o, Claude Opus, Gemini 2.0 Flash, DeepSeek параллельно...")
start = time.time()
for t in threads:
    t.start()
for t in threads:
    t.join(timeout=90)

elapsed = time.time() - start
print(f"Получены ответы за {elapsed:.1f}с\n")

ai_names = {
    'openai': 'GPT-4o (OpenAI)',
    'anthropic': 'Claude Opus 4.6 (Anthropic)',
    'gemini': 'Gemini 2.0 Flash (Google)',
    'deepseek': 'DeepSeek Chat',
}

for key, name in ai_names.items():
    print("\n" + "=" * 80)
    print(f"НЕЙРОСЕТЬ: {name}")
    print("=" * 80)
    print(results.get(key, 'No response'))

print("\n" + "=" * 80)
print("REVIEW COMPLETE")
print("=" * 80)
