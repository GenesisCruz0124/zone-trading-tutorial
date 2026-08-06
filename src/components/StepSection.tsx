import type { ReactNode } from 'react'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

type StepKey = 'fractals' | 'trendline' | 'entryZone' | 'invalidationTp' | 'weeklyOutlook'

interface StepSectionProps {
  id: string
  stepKey: StepKey
  children?: ReactNode
}

const STEP_ICONS: Record<StepKey, string> = {
  fractals: '🔺',
  trendline: '📈',
  entryZone: '🔲',
  invalidationTp: '🎯',
  weeklyOutlook: '🗺️',
}

export default function StepSection({ id, stepKey, children }: StepSectionProps) {
  const { language } = useSettings()
  const step = getContent(language).steps[stepKey]

  return (
    <section id={id} className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tv-panel text-xl"
          >
            {STEP_ICONS[stepKey]}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tv-teal/20 text-sm font-bold text-tv-teal">
            {step.stepNumber}
          </span>
          <h2 className="text-xl font-semibold text-fg sm:text-2xl">{step.title}</h2>
        </div>

        <div className="mt-4 max-w-3xl text-fg-muted">{step.intro}</div>

        {step.steps.length > 0 && (
          <ol className="mt-5 max-w-3xl space-y-2">
            {step.steps.map((line, idx) => (
              <li key={idx} className="flex gap-3 text-sm leading-relaxed text-fg-muted sm:text-base">
                <span className="shrink-0 font-mono text-tv-blue">{idx + 1}.</span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
        )}

        {children}

        {step.note && (
          <p className="mt-5 max-w-3xl rounded border border-tv-border bg-tv-panel px-4 py-3 text-sm text-fg-muted">
            {step.note}
          </p>
        )}
      </div>
    </section>
  )
}
