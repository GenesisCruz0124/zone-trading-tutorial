import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { language } = useSettings()
  const { nav } = getContent(language)

  function handleLinkClick() {
    if (window.matchMedia('(max-width: 1023px)').matches) onClose()
  }

  return (
    <>
      {open && <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={onClose} />}

      <aside
        className={`fixed inset-y-0 left-0 z-30 shrink-0 overflow-y-auto border-r border-tv-border bg-tv-bg transition-all duration-200 lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0 ${
          open ? 'w-72 translate-x-0' : 'w-72 -translate-x-full lg:w-0 lg:border-r-0'
        }`}
      >
        <div className={`w-72 p-4 ${open ? '' : 'lg:hidden'}`}>
          <div className="flex items-center justify-between gap-2">
            <p className="px-2 text-xs font-semibold uppercase tracking-wide text-fg-subtle">Zone Trading Tutorial</p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Hide sidebar"
              className="shrink-0 rounded p-1 text-fg-subtle hover:bg-tv-panel hover:text-tv-teal"
            >
              ✕
            </button>
          </div>

          <nav className="mt-3 space-y-1">
            {nav.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="block rounded px-3 py-2 text-sm text-fg-muted hover:bg-tv-panel hover:text-tv-teal"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
