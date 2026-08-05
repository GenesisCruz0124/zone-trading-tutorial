import RiskDisclaimerBanner from './RiskDisclaimerBanner'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

export default function HeroBanner() {
  const { language } = useSettings()
  const { hero } = getContent(language)

  return (
    <header className="border-b border-tv-border bg-gradient-to-b from-tv-panel to-tv-bg px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-tv-teal">{hero.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">{hero.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">{hero.intro}</p>
        <div className="mt-6">
          <RiskDisclaimerBanner />
        </div>
      </div>
    </header>
  )
}
