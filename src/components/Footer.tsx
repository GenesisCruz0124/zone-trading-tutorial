import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

export default function Footer() {
  const { language } = useSettings()
  const { footer } = getContent(language)

  return (
    <footer className="px-4 py-8 text-center text-xs text-fg-subtle sm:px-8">
      <p>Zone Trading Tutorial — v0.2.0</p>
      <p className="mt-1">{footer}</p>
    </footer>
  )
}
