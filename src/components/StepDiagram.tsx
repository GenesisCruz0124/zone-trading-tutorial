import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

type StepKey = 'fractals' | 'trendline' | 'entryZone' | 'invalidationTp' | 'weeklyOutlook'

const LABEL_STYLE = { fontSize: 10, fill: 'var(--fg-subtle)' } as const

function FractalsSvg() {
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full">
      <polyline
        points="20,110 80,40 140,85 200,20 260,65 320,10 380,55"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2"
      />
      {[
        { x: 80, y: 40, dir: 'up', label: 'Fractal High' },
        { x: 200, y: 20, dir: 'up', label: 'Fractal High' },
        { x: 140, y: 85, dir: 'down', label: 'Fractal Low' },
        { x: 260, y: 65, dir: 'down', label: 'Fractal Low' },
      ].map((p, i) => (
        <g key={i}>
          {p.dir === 'up' ? (
            <polygon points={`${p.x - 6},${p.y - 8} ${p.x + 6},${p.y - 8} ${p.x},${p.y - 18}`} fill="var(--teal)" />
          ) : (
            <polygon
              points={`${p.x - 6},${p.y + 8} ${p.x + 6},${p.y + 8} ${p.x},${p.y + 18}`}
              fill="var(--danger-fg)"
            />
          )}
          <text x={p.x} y={p.dir === 'up' ? p.y - 24 : p.y + 32} textAnchor="middle" style={LABEL_STYLE}>
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function TrendlineSvg() {
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full">
      <polyline
        points="20,110 80,40 140,85 200,20 260,65 320,10 380,105"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2"
      />
      <line x1="140" y1="85" x2="380" y2="8" stroke="var(--teal)" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="140" cy="85" r="4" fill="var(--teal)" />
      <circle cx="260" cy="65" r="4" fill="var(--teal)" />
      <circle cx="357" cy="80" r="6" fill="none" stroke="var(--danger-fg)" strokeWidth="2" />
      <text x="150" y="105" style={LABEL_STYLE} fill="var(--teal)">
        Trendline (fractal lows)
      </text>
      <text x="330" y="130" textAnchor="middle" style={LABEL_STYLE} fill="var(--danger-fg)">
        Break!
      </text>
    </svg>
  )
}

function EntryZoneSvg() {
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full">
      <rect x="150" y="70" width="90" height="35" fill="var(--teal)" fillOpacity="0.15" stroke="var(--teal)" strokeOpacity="0.6" />
      <polyline
        points="20,100 90,35 150,90 195,80 240,95 300,25 380,50"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2"
      />
      <text x="195" y="63" textAnchor="middle" style={LABEL_STYLE} fill="var(--teal)">
        Entry Zone
      </text>
      <path d="M195,105 L195,118" stroke="var(--fg-subtle)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--fg-subtle)" />
        </marker>
      </defs>
    </svg>
  )
}

function InvalidationTpSvg() {
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full">
      <line x1="10" y1="120" x2="390" y2="120" stroke="var(--danger-fg)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="15" y="133" style={LABEL_STYLE} fill="var(--danger-fg)">
        Invalidation / SL
      </text>
      <line x1="10" y1="25" x2="390" y2="25" stroke="var(--teal)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="15" y="18" style={LABEL_STYLE} fill="var(--teal)">
        Take Profit
      </text>
      <polyline points="30,95 100,90 170,70 240,55 310,35 380,28" fill="none" stroke="var(--blue)" strokeWidth="2" />
      <circle cx="100" cy="90" r="5" fill="var(--blue)" />
      <text x="100" y="107" textAnchor="middle" style={LABEL_STYLE}>
        Entry
      </text>
    </svg>
  )
}

function WeeklyOutlookSvg() {
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full">
      <rect x="20" y="60" width="360" height="40" fill="var(--blue)" fillOpacity="0.15" stroke="var(--blue)" strokeOpacity="0.6" />
      <text x="30" y="53" style={LABEL_STYLE} fill="var(--blue)">
        Weekly Outlook Zone
      </text>
      <polyline points="20,15 110,50 170,80 230,70 300,105 380,60" fill="none" stroke="var(--fg-muted)" strokeWidth="2" />
      <circle cx="230" cy="70" r="4" fill="var(--teal)" />
    </svg>
  )
}

const DIAGRAMS: Record<StepKey, () => JSX.Element> = {
  fractals: FractalsSvg,
  trendline: TrendlineSvg,
  entryZone: EntryZoneSvg,
  invalidationTp: InvalidationTpSvg,
  weeklyOutlook: WeeklyOutlookSvg,
}

export default function StepDiagram({ stepKey }: { stepKey: StepKey }) {
  const { language } = useSettings()
  const { sampleDiagramLabel } = getContent(language)
  const Diagram = DIAGRAMS[stepKey]

  return (
    <div className="mt-5 max-w-3xl rounded-lg border border-tv-border bg-tv-panel p-3">
      <div className="aspect-[8/3] w-full">
        <Diagram />
      </div>
      <p className="mt-1 text-center text-xs text-fg-subtle">{sampleDiagramLabel}</p>
    </div>
  )
}
