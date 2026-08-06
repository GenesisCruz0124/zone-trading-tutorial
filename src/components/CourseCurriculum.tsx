import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface CurriculumItem {
  label: string
  done?: boolean
  current?: boolean
}

interface CurriculumWeek {
  title: string
  items: CurriculumItem[]
}

const CURRICULUM: CurriculumWeek[] = [
  {
    title: 'WEEK 1',
    items: [
      { label: 'Module 1 Onboarding Video', done: true },
      { label: '1. What & How FOREX works (Tagalog)', done: true },
      { label: '1.1 What & How FOREX works (English)', done: true },
      { label: '2. Trading Expectation', done: true },
      { label: '2.1 Trading Expectation (English)', done: true },
      { label: '3. Price & Candlesticks', done: true },
      { label: '3.1 Price & Candlesticks (English)', done: true },
      { label: '4. Pips & Lots', done: true, current: true },
      { label: '4.1 Pips & Lots (English)', done: true },
    ],
  },
  {
    title: 'WEEK 2',
    items: [
      { label: 'Module 2 Onboarding Video', done: true },
      { label: '5. Trading TIME Sessions', done: true },
      { label: '5.1 Trading Time Session (English)' },
      { label: '6. Trends & Trendlines' },
      { label: '6.1 Trends & Trendlines (English)' },
      { label: '7. Support & Resistance' },
      { label: '7.1 Support & Resistance (English)' },
    ],
  },
  {
    title: 'WEEK 3',
    items: [
      { label: 'Module 3' },
      { label: '8. Technical Indicators' },
      { label: '8.1 Technical Indicators (English)' },
    ],
  },
  {
    title: 'WEEK 4',
    items: [
      { label: '9. Three Types Of Market Analysis (English)' },
      { label: '10. What Is Technical Analysis (ENGLISH)' },
      { label: '11. What Is Fundamental Analysis (English)' },
    ],
  },
]

function CheckIcon({ done }: { done?: boolean }) {
  if (done) {
    return (
      <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-tv-teal">
        <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.18" />
        <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return <span className="h-5 w-5 shrink-0 rounded-full border-2 border-tv-border" />
}

function WeekAccordion({ week }: { week: CurriculumWeek }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-tv-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold uppercase tracking-wide text-fg hover:bg-tv-panel/60"
      >
        {week.title}
        <span className={`text-fg-subtle transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && (
        <ul>
          {week.items.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm ${
                item.current ? 'bg-warn-bg text-fg' : 'text-fg-muted'
              }`}
            >
              <CheckIcon done={item.done} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function CourseCurriculum() {
  const { language } = useSettings()
  const { curriculum } = getContent(language)

  return (
    <section id="curriculum" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-semibold text-fg sm:text-2xl">{curriculum.heading}</h2>
        <p className="mt-2 text-sm text-fg-muted">{curriculum.description}</p>

        <div className="mt-6 overflow-hidden rounded-lg border border-tv-border bg-tv-panel">
          {CURRICULUM.map((week) => (
            <WeekAccordion key={week.title} week={week} />
          ))}
        </div>

        <p className="mt-3 text-xs text-fg-subtle">{curriculum.note}</p>
      </div>
    </section>
  )
}
