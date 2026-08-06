import { useState } from 'react'
import HeroBanner from './components/HeroBanner'
import ChartPanel from './components/ChartPanel'
import StepSection from './components/StepSection'
import TutorialImage from './components/TutorialImage'
import ExampleWalkthrough from './components/ExampleWalkthrough'
import RiskManagementSection from './components/RiskManagementSection'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import SettingsToggle from './components/SettingsToggle'
import { useSettings } from './context/SettingsContext'
import { getContent } from './i18n/content'

function App() {
  const { language } = useSettings()
  const { examples } = getContent(language)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-tv-bg lg:flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="min-w-0 flex-1">
        <nav className="sticky top-0 z-10 flex items-center gap-2 border-b border-tv-border bg-tv-bg/95 px-4 py-2 backdrop-blur sm:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="rounded p-2 text-fg-muted hover:bg-tv-panel hover:text-tv-teal lg:hidden"
          >
            ☰
          </button>
          <div className="flex flex-1 justify-end">
            <SettingsToggle />
          </div>
        </nav>

        <HeroBanner />

        <ChartPanel />

        <StepSection id="step-fractals" stepKey="fractals">
          <TutorialImage id="fractals-indicator" caption={getContent(language).steps.fractals.imageCaptions[0]} />
        </StepSection>

        <StepSection id="step-trendline" stepKey="trendline">
          <TutorialImage id="trendline-break" caption={getContent(language).steps.trendline.imageCaptions[0]} />
        </StepSection>

        <StepSection id="step-entry-zone" stepKey="entryZone">
          <TutorialImage id="entry-zone-long" caption={getContent(language).steps.entryZone.imageCaptions[0]} />
          <TutorialImage id="entry-zone-short" caption={getContent(language).steps.entryZone.imageCaptions[1]} />
        </StepSection>

        <StepSection id="step-invalidation-tp" stepKey="invalidationTp">
          <TutorialImage id="invalidation-tp" caption={getContent(language).steps.invalidationTp.imageCaptions[0]} />
        </StepSection>

        <StepSection id="step-weekly-outlook" stepKey="weeklyOutlook">
          <TutorialImage id="weekly-outlook-setup" caption={getContent(language).steps.weeklyOutlook.imageCaptions[0]} />
        </StepSection>

        <section id="worked-examples" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tv-panel text-xl"
              >
                📊
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tv-teal/20 text-sm font-bold text-tv-teal">
                6
              </span>
              <h2 className="text-xl font-semibold text-fg sm:text-2xl">{examples.heading}</h2>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <ExampleWalkthrough id="example-long" variant="long" />
              <ExampleWalkthrough id="example-short" variant="short" />
            </div>
          </div>
        </section>

        <RiskManagementSection />

        <Footer />
      </div>
    </div>
  )
}

export default App
