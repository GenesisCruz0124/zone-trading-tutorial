import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface SymbolSwitcherProps {
  symbol: string
  interval: string
  onSymbolChange: (symbol: string) => void
  onIntervalChange: (interval: string) => void
}

const INTERVALS = [
  { label: '1m', value: '1' },
  { label: '5m', value: '5' },
  { label: '15m', value: '15' },
  { label: '1h', value: '60' },
  { label: '4h', value: '240' },
  { label: '1D', value: 'D' },
]

export default function SymbolSwitcher({
  symbol,
  interval,
  onSymbolChange,
  onIntervalChange,
}: SymbolSwitcherProps) {
  const { language } = useSettings()
  const { chart } = getContent(language)

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-t-lg border border-tv-border bg-tv-panel px-4 py-3">
      <div className="flex items-center gap-2">
        <label htmlFor="symbol-input" className="text-xs uppercase tracking-wide text-fg-muted">
          {chart.symbolLabel}
        </label>
        <input
          id="symbol-input"
          type="text"
          defaultValue={symbol}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSymbolChange((e.target as HTMLInputElement).value.trim().toUpperCase())
            }
          }}
          onBlur={(e) => onSymbolChange(e.target.value.trim().toUpperCase())}
          placeholder="OANDA:XAUUSD"
          className="w-44 rounded border border-tv-border bg-tv-bg px-2 py-1 text-sm text-fg focus:border-tv-teal focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="interval-select" className="text-xs uppercase tracking-wide text-fg-muted">
          {chart.intervalLabel}
        </label>
        <select
          id="interval-select"
          value={interval}
          onChange={(e) => onIntervalChange(e.target.value)}
          className="rounded border border-tv-border bg-tv-bg px-2 py-1 text-sm text-fg focus:border-tv-teal focus:outline-none"
        >
          {INTERVALS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <span className="ml-auto text-xs text-fg-subtle">{chart.liveBadge}</span>
    </div>
  )
}
