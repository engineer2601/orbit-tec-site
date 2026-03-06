"""
Консультация 4 reasoning-моделей по позиционированию секции услуг ORBIT tec.
"""
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import os, json, threading, time, urllib.request, urllib.error

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
    except Exception as e:
        print(f"Keys load error: {e}")
    return keys

_k = _load_keys()
OPENAI_KEY    = os.environ.get('OPENAI_API_KEY', _k.get('openai', ''))
ANTHROPIC_KEY = os.environ.get('ANTHROPIC_API_KEY', _k.get('claude', ''))
GEMINI_KEY    = os.environ.get('GEMINI_API_KEY', _k.get('gemini', ''))
DEEPSEEK_KEY  = os.environ.get('DEEPSEEK_API_KEY', _k.get('deepseek', ''))

PROMPT = """Ты — старший стратег по B2B-маркетингу и позиционированию. Тебе нужно оценить и улучшить секцию "Что мы строим" на сайте AI-компании ORBIT tec.

=== КОНТЕКСТ О КОМПАНИИ ===
ORBIT tec — компания Владимира Харлашко. Строит автономные AI-системы.
- 15+ лет CTO в enterprise: ПГК ($1.5B), Raiffeisen VP Engineering, ПАРМА (650 чел.)
- AI-трансформация 500+ специалистов, ~50% экономии трудозатрат
- Реальные production-проекты: 27-агентный конвейер (11 микросервисов), мультиплатформенная видеофабрика (8 сервисов, 6 платформ), Agent Manager (Mission Control для AI-разработки), RAG+KG (4-way поиск, 7 коннекторов, Neo4j)
- Целевые клиенты: B2B, CEO/директора компаний с оборотом 50-500 млн руб

=== ТЕКУЩИЕ 4 ТИПА AI-СИСТЕМ (то что сейчас на сайте) ===
1. "Мультиагентные конвейеры" — десятки агентов параллельно, 24/7 без человека
2. "Корпоративная база знаний" — RAG на документах компании, MCP-сервер
3. "AI-трансформация бизнеса" — аудит процессов, ROI, встраивание AI
4. "AI-продукты с нуля" — мобильные приложения, MVP за 72 часа

=== ПРОБЛЕМА (замечание основателя) ===
Позиционирование слишком техническое, не бизнесовое. RAG+KG — это не просто "база знаний", там потенциал намного шире (оркестрация знаний, AI-мозг компании, интеграция с любыми источниками). Не хватает масштаба и амбиции. Нужно добавить что-то про оркестрацию. Должно быть более грандиозно.

=== ТВОЯ ЗАДАЧА ===
Предложи НОВЫЕ формулировки для 4 (или 5) типов AI-систем, которые:
1. Звучат как бизнес-возможности, а не технические решения — язык CEO, а не CTO
2. Раскрывают реальный масштаб и потенциал каждого направления
3. Включают концепцию оркестрации AI-команд/агентов
4. Позволяют RAG+KG выйти за рамки "корп базы знаний"
5. Создают ощущение "это меняет правила игры для моего бизнеса"

Для каждого типа дай:
- Новое название (короткое, бизнесовое)
- Описание 2-3 предложения (язык результата, не технологии)
- Почему это сильнее текущей формулировки

Отвечай на русском. Будь конкретным и смелым."""

def http_post(url, data, headers, timeout=90):
    req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers)
    resp = urllib.request.urlopen(req, timeout=timeout)
    return json.loads(resp.read())

def call_openai(results):
    try:
        d = http_post(
            'https://api.openai.com/v1/chat/completions',
            {"model": "gpt-4o", "messages": [{"role": "user", "content": PROMPT}], "max_tokens": 2500, "temperature": 0.7},
            {'Authorization': f'Bearer {OPENAI_KEY}', 'Content-Type': 'application/json'}
        )
        results['openai'] = d['choices'][0]['message']['content']
    except Exception as e:
        results['openai'] = f'ERROR: {e}'

def call_anthropic(results):
    try:
        d = http_post(
            'https://api.anthropic.com/v1/messages',
            {"model": "claude-opus-4-6", "max_tokens": 16000,
             "thinking": {"type": "enabled", "budget_tokens": 8000},
             "messages": [{"role": "user", "content": PROMPT}]},
            {'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01', 'Content-Type': 'application/json'},
            timeout=180
        )
        text_blocks = [b['text'] for b in d.get('content', []) if b.get('type') == 'text']
        results['anthropic'] = '\n'.join(text_blocks) if text_blocks else str(d)
    except Exception as e:
        results['anthropic'] = f'ERROR: {e}'

def call_gemini(results):
    try:
        url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key={GEMINI_KEY}'
        d = http_post(url,
            {"contents": [{"parts": [{"text": PROMPT}]}],
             "generationConfig": {"maxOutputTokens": 2500, "temperature": 1.0, "thinkingConfig": {"thinkingBudget": 4000}}},
            {'Content-Type': 'application/json'}, timeout=90)
        results['gemini'] = d['candidates'][0]['content']['parts'][-1]['text']
    except urllib.error.HTTPError:
        try:
            url2 = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_KEY}'
            d2 = http_post(url2,
                {"contents": [{"parts": [{"text": PROMPT}]}], "generationConfig": {"maxOutputTokens": 2500, "temperature": 0.7}},
                {'Content-Type': 'application/json'}, timeout=60)
            results['gemini'] = '[gemini-2.0-flash]\n' + d2['candidates'][0]['content']['parts'][0]['text']
        except Exception as e2:
            results['gemini'] = f'ERROR: {e2}'
    except Exception as e:
        results['gemini'] = f'ERROR: {e}'

def call_deepseek(results):
    try:
        d = http_post(
            'https://api.deepseek.com/chat/completions',
            {"model": "deepseek-reasoner", "messages": [{"role": "user", "content": PROMPT}], "max_tokens": 3000},
            {'Authorization': f'Bearer {DEEPSEEK_KEY}', 'Content-Type': 'application/json'},
            timeout=150
        )
        results['deepseek'] = d['choices'][0]['message'].get('content', '')
    except Exception as e:
        results['deepseek'] = f'ERROR: {e}'

print("=" * 70)
print("ORBIT tec — консультация по позиционированию услуг")
print("4 reasoning-модели параллельно")
print("=" * 70)

results = {}
threads = [
    threading.Thread(target=call_openai,    args=(results,)),
    threading.Thread(target=call_anthropic, args=(results,)),
    threading.Thread(target=call_gemini,    args=(results,)),
    threading.Thread(target=call_deepseek,  args=(results,)),
]

t0 = time.time()
for t in threads: t.start()
for t in threads: t.join(timeout=200)
print(f"Готово за {time.time()-t0:.0f}с\n")

labels = {
    'openai':    'GPT-4o',
    'anthropic': 'Claude Opus 4.6 [extended thinking]',
    'gemini':    'Gemini 2.5 Flash [thinking]',
    'deepseek':  'DeepSeek Reasoner',
}
for key, label in labels.items():
    print("\n" + "=" * 70)
    print(f"[ {label} ]")
    print("=" * 70)
    print(results.get(key, 'NO RESPONSE'))

print("\n" + "=" * 70)
print("DONE")
print("=" * 70)
