import type { ReactNode } from 'react'

interface StepSectionProps {
  id: string
  stepNumber: string
  title: string
  intro: ReactNode
  steps?: string[]
  note?: ReactNode
  children?: ReactNode
}

export default function StepSection({ id, stepNumber, title, intro, steps, note, children }: StepSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tv-teal/20 text-sm font-bold text-tv-teal">
            {stepNumber}
          </span>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">{title}</h2>
        </div>

        <div className="mt-4 max-w-3xl text-slate-300">{intro}</div>

        {steps && steps.length > 0 && (
          <ol className="mt-5 max-w-3xl space-y-2">
            {steps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                <span className="shrink-0 font-mono text-tv-blue">{idx + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        )}

        {children}

        {note && (
          <p className="mt-5 max-w-3xl rounded border border-tv-border bg-tv-panel px-4 py-3 text-sm text-slate-400">
            {note}
          </p>
        )}
      </div>
    </section>
  )
}
