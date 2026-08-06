import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

const LABEL_STYLE = { fontSize: 10, fill: 'var(--fg-subtle)' } as const

function LongSvg() {
  return (
    <svg viewBox="0 0 400 160" className="h-full w-full">
      <line x1="10" y1="120" x2="390" y2="120" stroke="var(--danger-fg)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="15" y="133" style={LABEL_STYLE} fill="var(--danger-fg)">
        Invalidation
      </text>
      <line x1="10" y1="25" x2="390" y2="25" stroke="var(--teal)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="15" y="18" style={LABEL_STYLE} fill="var(--teal)">
        Target
      </text>
      <rect x="150" y="80" width="90" height="30" fill="var(--teal)" fillOpacity="0.15" stroke="var(--teal)" strokeOpacity="0.6" />
      <text x="195" y="73" textAnchor="middle" style={LABEL_STYLE} fill="var(--teal)">
        Entry Zone
      </text>
      <polyline
        points="20,140 90,95 150,60 195,95 240,90 300,45 370,20"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2"
      />
    </svg>
  )
}

function ShortSvg() {
  return (
    <svg viewBox="0 0 400 160" className="h-full w-full">
      <line x1="10" y1="30" x2="390" y2="30" stroke="var(--danger-fg)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="15" y="23" style={LABEL_STYLE} fill="var(--danger-fg)">
        Invalidation
      </text>
      <line x1="10" y1="135" x2="390" y2="135" stroke="var(--teal)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="15" y="148" style={LABEL_STYLE} fill="var(--teal)">
        Target
      </text>
      <rect x="150" y="45" width="90" height="30" fill="var(--danger-fg)" fillOpacity="0.15" stroke="var(--danger-fg)" strokeOpacity="0.6" />
      <text x="195" y="42" textAnchor="middle" style={LABEL_STYLE} fill="var(--danger-fg)">
        Supply Zone
      </text>
      <polyline
        points="20,20 90,65 150,95 195,60 240,70 300,110 370,140"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2"
      />
    </svg>
  )
}

const DIAGRAMS: Record<'long' | 'short', () => JSX.Element> = {
  long: LongSvg,
  short: ShortSvg,
}

export default function ExampleDiagram({ variant }: { variant: 'long' | 'short' }) {
  const { language } = useSettings()
  const { sampleDiagramLabel } = getContent(language)
  const Diagram = DIAGRAMS[variant]

  return (
    <div className="mt-4 rounded-lg border border-tv-border bg-tv-bg p-3">
      <div className="aspect-[8/3] w-full">
        <Diagram />
      </div>
      <p className="mt-1 text-center text-xs text-fg-subtle">{sampleDiagramLabel}</p>
    </div>
  )
}
