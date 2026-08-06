import { useState } from 'react'
import TradingViewWidget from './TradingViewWidget'
import SymbolSwitcher from './SymbolSwitcher'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

const DEFAULT_SYMBOL = 'OANDA:XAUUSD'
const DEFAULT_INTERVAL = '15'

export default function ChartPanel() {
  const [symbol, setSymbol] = useState(DEFAULT_SYMBOL)
  const [interval, setInterval] = useState(DEFAULT_INTERVAL)
  const { language } = useSettings()
  const { chart } = getContent(language)

  return (
    <section id="live-chart" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-fg sm:text-2xl">{chart.title}</h2>
        <p className="mt-2 text-sm text-fg-muted sm:text-base">{chart.caption}</p>

        <div className="mt-5 overflow-hidden rounded-lg border border-tv-border">
          <SymbolSwitcher
            symbol={symbol}
            interval={interval}
            onSymbolChange={setSymbol}
            onIntervalChange={setInterval}
          />
          <div className="h-[420px] w-full bg-tv-panel sm:h-[520px]">
            <TradingViewWidget symbol={symbol} interval={interval} />
          </div>
        </div>
      </div>
    </section>
  )
}
