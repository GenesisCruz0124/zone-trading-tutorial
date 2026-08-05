import { useState } from 'react'
import TradingViewWidget from './TradingViewWidget'
import SymbolSwitcher from './SymbolSwitcher'

const DEFAULT_SYMBOL = 'BYBIT:SQDUSDT.P'
const DEFAULT_INTERVAL = '15'

export default function ChartPanel() {
  const [symbol, setSymbol] = useState(DEFAULT_SYMBOL)
  const [interval, setInterval] = useState(DEFAULT_INTERVAL)

  return (
    <section id="live-chart" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Live Chart Panel</h2>
        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Practice reading structure dito habang binabasa yung guide sa baba.
        </p>

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
