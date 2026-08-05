import HeroBanner from './components/HeroBanner'
import ChartPanel from './components/ChartPanel'
import StepSection from './components/StepSection'
import TutorialImage from './components/TutorialImage'
import ExampleWalkthrough from './components/ExampleWalkthrough'
import RiskManagementSection from './components/RiskManagementSection'
import Footer from './components/Footer'

const NAV_LINKS = [
  { id: 'live-chart', label: 'Chart' },
  { id: 'step-fractals', label: '1. Fractals' },
  { id: 'step-trendline', label: '2. Trendline' },
  { id: 'step-entry-zone', label: '3. Entry Zone' },
  { id: 'step-invalidation-tp', label: '4. Invalid/TP' },
  { id: 'worked-examples', label: 'Examples' },
  { id: 'risk-management', label: 'Risk Mgmt' },
]

function App() {
  return (
    <div className="min-h-screen bg-tv-bg">
      <nav className="sticky top-0 z-10 overflow-x-auto border-b border-tv-border bg-tv-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl gap-1 px-4 py-2 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap rounded px-3 py-1.5 text-sm text-slate-400 hover:bg-tv-panel hover:text-tv-teal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <HeroBanner />

      <ChartPanel />

      <StepSection
        id="step-fractals"
        stepNumber="1"
        title="Add the Fractals Indicator"
        intro={
          <p>
            Ang <strong>Fractals</strong> (Williams Fractals) indicator ay hindi built-in sa free embedded widget sa
            itaas — kailangan mong i-add ito manually sa sarili mong TradingView account. Gamitin ang{' '}
            <strong>"Open in new tab"</strong> link sa chart panel para ma-access ang full TradingView interface.
          </p>
        }
        steps={[
          'Buksan ang chart sa TradingView.com (pwede gamitin ang free tier account).',
          'I-click ang "Indicators" (fx icon) sa toolbar.',
          'I-search ang "Fractals" (Williams Fractals).',
          'I-add sa chart.',
          'I-adjust ang period settings kung gusto mong i-tweak ang sensitivity.',
        ]}
      >
        <TutorialImage caption="Screenshot slot: Indicators search dialog na may Fractals result." />
      </StepSection>

      <StepSection
        id="step-trendline"
        stepNumber="2"
        title="Identify Structure Break (Trendline)"
        intro={
          <p>
            Ang <strong>trendline break</strong> ay nagsi-signal ng potential shift sa swing structure. I-draw ang
            trendline gamit ang mga <strong>Fractal points</strong> — kumonekta ng swing lows (kung uptrend) o
            swing highs (kung downtrend).
          </p>
        }
        steps={[
          'Piliin ang Trendline tool sa drawing toolbar.',
          'I-click ang unang fractal point.',
          'I-click ang pangalawang fractal point para makumpleto ang linya.',
          'Bantayan kung may candle close na dumaan/tumawid sa linya — iyan ang potential break.',
        ]}
        note="Note: hindi sapat ang break lang para maging confirmation — dapat i-pair ito sa zone (susunod na section)."
      >
        <TutorialImage caption="Screenshot slot: Trendline na naka-draw gamit ang fractal swing points." />
      </StepSection>

      <StepSection
        id="step-entry-zone"
        stepNumber="3"
        title="Draw the Entry Zone"
        intro={
          <p>
            Zone-based entry vs single-price entry: mas maganda ang zone kasi <strong>ina-absorb nito ang wick
            noise</strong> at mas realistic kumpara sa laser-thin na linya. Ang zone ay nagre-represent ng
            consolidation o reaction area bago ang break.
          </p>
        }
        steps={[
          'Piliin ang Rectangle tool sa drawing toolbar.',
          'I-draw ang box sa paligid ng consolidation/reaction area bago ang trendline break.',
          'I-adjust ang taas ng box para ma-cover ang buong reaction area, hindi lang single wick.',
        ]}
      >
        <TutorialImage caption="Screenshot slot: Rectangle zone box sa paligid ng consolidation area (long setup)." />
        <TutorialImage caption="Screenshot slot: Rectangle zone box para sa short/reversal setup." />
      </StepSection>

      <StepSection
        id="step-invalidation-tp"
        stepNumber="4"
        title="Set Invalidation & Take-Profit Zones"
        intro={
          <p>
            Ang <strong>invalidation zone</strong> ay yung area kung saan, once na madaanan ng price, hindi na
            valid ang setup — parang "soft stop area" siya, hindi single stop price. Ang{' '}
            <strong>take-profit zone</strong> naman ay target area, hindi rin single price.
          </p>
        }
        steps={[
          'Gamitin ulit ang Rectangle tool.',
          'I-draw ang invalidation zone (mungkahing kulay: red/pink) sa likod ng entry zone.',
          'I-draw ang take-profit zone (mungkahing kulay: teal/green) sa target area.',
        ]}
        note="Mahalaga: ang lapad ng zone ay dapat base sa volatility/ATR ng symbol — hindi basta-basta lang o arbitrary."
      >
        <TutorialImage caption="Screenshot slot: Color-coded invalidation (red/pink) at take-profit (teal/green) zones." />
      </StepSection>

      <section id="worked-examples" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tv-teal/20 text-sm font-bold text-tv-teal">
              7
            </span>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Worked Examples</h2>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <ExampleWalkthrough
              label="Uptrend Continuation"
              direction="Long"
              description={
                <p>
                  Sa uptrend, nag-break ang trendline pataas papunta sa bagong swing high. Bumalik ang price sa
                  <strong> entry zone</strong> (dating resistance na naging support), naka-set ang{' '}
                  <strong>invalidation zone</strong> sa ibaba ng zone, at ang <strong>target zone</strong> sa itaas
                  base sa susunod na structure level.
                </p>
              }
              imageCaption="Screenshot slot: Long setup — trendline break, entry zone, invalidation below, target above."
            />
            <ExampleWalkthrough
              label="Supply Zone Reaction"
              direction="Short"
              description={
                <p>
                  Matapos ang extended rally, nag-react ang price sa isang <strong>supply zone</strong>. Naka-set
                  ang <strong>invalidation zone</strong> sa itaas ng zone, at ang <strong>target zone</strong> sa
                  ibaba base sa nakaraang structure.
                </p>
              }
              imageCaption="Screenshot slot: Short/reversal setup — supply zone reaction, invalidation above, target below."
            />
          </div>
        </div>
      </section>

      <RiskManagementSection />

      <Footer />
    </div>
  )
}

export default App
