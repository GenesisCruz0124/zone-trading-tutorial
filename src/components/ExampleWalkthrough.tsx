import TutorialImage from './TutorialImage'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface ExampleWalkthroughProps {
  id: string
  variant: 'long' | 'short'
}

export default function ExampleWalkthrough({ id, variant }: ExampleWalkthroughProps) {
  const { language } = useSettings()
  const { examples } = getContent(language)
  const example = variant === 'long' ? examples.long : examples.short
  const direction = variant === 'long' ? 'Long' : 'Short'

  return (
    <div className="rounded-lg border border-tv-border bg-tv-panel p-5">
      <div className="flex items-center gap-2">
        <span
          className={`rounded px-2 py-0.5 text-xs font-semibold uppercase ${
            variant === 'long' ? 'bg-tv-teal/20 text-tv-teal' : 'bg-danger-bg text-danger-fg'
          }`}
        >
          {direction}
        </span>
        <h3 className="font-semibold text-fg">{example.label}</h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-fg-muted">{example.description}</div>
      <p className="mt-3 text-xs italic text-fg-subtle">{examples.disclaimerNote}</p>
      <TutorialImage id={id} caption={example.imageCaption} />
    </div>
  )
}
