import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface LeadData {
  name: string
  company: string
  task: string
  lang: string
  ts: string
  ip: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, task, lang } = body

    if (!name || !task) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const lead: LeadData = {
      name: String(name).slice(0, 200),
      company: String(company || '').slice(0, 200),
      task: String(task).slice(0, 2000),
      lang: String(lang || 'ru').slice(0, 5),
      ts: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
    }

    // Save to leads.json
    const leadsPath = path.join(process.cwd(), 'data', 'leads.json')
    const dir = path.dirname(leadsPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

    let leads: LeadData[] = []
    if (fs.existsSync(leadsPath)) {
      try {
        leads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'))
      } catch {}
    }
    leads.push(lead)
    fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2))

    // Log to console
    console.log(`[LEAD] ${lead.ts} | ${lead.lang} | ${lead.name} | ${lead.company} | ${lead.task.slice(0, 80)}`)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[CONTACT API ERROR]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
