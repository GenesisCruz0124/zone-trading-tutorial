import RiskDisclaimerBanner from './RiskDisclaimerBanner'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

export default function RiskManagementSection() {
  const { language } = useSettings()
  const { risk } = getContent(language)

  return (
    <section id="risk-management" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tv-panel text-xl"
          >
            🛡️
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tv-teal/20 text-sm font-bold text-tv-teal">
            7
          </span>
          <h2 className="text-xl font-semibold text-fg sm:text-2xl">{risk.heading}</h2>
        </div>

        <div className="mt-4 max-w-3xl space-y-4 text-fg-muted">
          {risk.body}
          <div>
            <p className="font-medium text-fg">{risk.practicesHeading}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base">
              {risk.practices.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <RiskDisclaimerBanner />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-muted">{risk.closingDisclaimer}</p>
        </div>
      </div>
    </section>
  )
}
