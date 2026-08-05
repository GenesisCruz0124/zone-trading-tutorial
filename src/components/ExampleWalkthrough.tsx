import type { ReactNode } from 'react'
import TutorialImage from './TutorialImage'

interface ExampleWalkthroughProps {
  id: string
  label: string
  direction: 'Long' | 'Short'
  description: ReactNode
  imageCaption: string
}

export default function ExampleWalkthrough({ id, label, direction, description, imageCaption }: ExampleWalkthroughProps) {
  const isLong = direction === 'Long'
  return (
    <div className="rounded-lg border border-tv-border bg-tv-panel p-5">
      <div className="flex items-center gap-2">
        <span
          className={`rounded px-2 py-0.5 text-xs font-semibold uppercase ${
            isLong ? 'bg-tv-teal/20 text-tv-teal' : 'bg-rose-500/20 text-rose-300'
          }`}
        >
          {direction}
        </span>
        <h3 className="font-semibold text-slate-100">{label}</h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-slate-300">{description}</div>
      <p className="mt-3 text-xs italic text-slate-500">Halimbawa lang ito — hindi ito recommendation na mag-trade.</p>
      <TutorialImage id={id} caption={imageCaption} />
    </div>
  )
}
