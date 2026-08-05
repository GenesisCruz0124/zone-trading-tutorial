import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface RiskDisclaimerBannerProps {
  compact?: boolean
}

export default function RiskDisclaimerBanner({ compact = false }: RiskDisclaimerBannerProps) {
  const { language } = useSettings()
  const { disclaimer } = getContent(language)

  return (
    <div
      role="alert"
      className={`rounded-lg border border-warn-border bg-warn-bg text-warn-fg ${
        compact ? 'px-4 py-3 text-sm' : 'px-5 py-4'
      }`}
    >
      <p className="font-semibold">{disclaimer.heading}</p>
      <p className={compact ? 'mt-1' : 'mt-2 text-sm leading-relaxed'}>{disclaimer.body}</p>
    </div>
  )
}
