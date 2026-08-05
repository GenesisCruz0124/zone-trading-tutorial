import { useSettings } from '../context/SettingsContext'

export default function SettingsToggle() {
  const { theme, language, setTheme, setLanguage } = useSettings()

  return (
    <div className="flex shrink-0 items-center gap-2 py-1">
      <div className="flex overflow-hidden rounded border border-tv-border text-xs">
        <button
          type="button"
          onClick={() => setLanguage('taglish')}
          aria-pressed={language === 'taglish'}
          className={`px-2 py-1 transition-colors ${
            language === 'taglish' ? 'bg-tv-teal/20 text-tv-teal' : 'text-fg-muted hover:bg-tv-panel'
          }`}
        >
          Taglish
        </button>
        <button
          type="button"
          onClick={() => setLanguage('english')}
          aria-pressed={language === 'english'}
          className={`px-2 py-1 transition-colors ${
            language === 'english' ? 'bg-tv-teal/20 text-tv-teal' : 'text-fg-muted hover:bg-tv-panel'
          }`}
        >
          EN
        </button>
      </div>

      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className="rounded border border-tv-border px-2 py-1 text-xs text-fg-muted transition-colors hover:bg-tv-panel"
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  )
}
