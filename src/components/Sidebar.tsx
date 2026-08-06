import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'
import { CURRICULUM } from '../data/curriculum'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { language } = useSettings()
  const { nav } = getContent(language)
  const [curriculumOpen, setCurriculumOpen] = useState(true)

  return (
    <>
      {open && <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={onClose} />}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 shrink-0 overflow-y-auto border-r border-tv-border bg-tv-bg transition-transform duration-200 lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <p className="px-2 text-xs font-semibold uppercase tracking-wide text-fg-subtle">Zone Trading Tutorial</p>

          <nav className="mt-3 space-y-1">
            {nav.map((link) =>
              link.id === 'curriculum' ? (
                <div key={link.id}>
                  <div className="flex items-center rounded hover:bg-tv-panel">
                    <a
                      href={`#${link.id}`}
                      onClick={onClose}
                      className="flex-1 rounded px-3 py-2 text-sm font-medium text-fg-muted hover:text-tv-teal"
                    >
                      {link.label}
                    </a>
                    <button
                      type="button"
                      aria-label="Toggle curriculum tree"
                      onClick={() => setCurriculumOpen((o) => !o)}
                      className="px-2 py-2 text-fg-subtle hover:text-tv-teal"
                    >
                      <span className={`inline-block transition-transform ${curriculumOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                  </div>

                  {curriculumOpen && (
                    <div className="ml-3 space-y-2 border-l border-tv-border py-1 pl-3">
                      {CURRICULUM.map((week) => (
                        <div key={week.title}>
                          <p className="px-2 text-[11px] font-bold uppercase tracking-wide text-fg-subtle">{week.title}</p>
                          <div>
                            {week.items.map((item, idx) => (
                              <a
                                key={idx}
                                href="#curriculum"
                                onClick={onClose}
                                title={item.label}
                                className={`flex items-center gap-1.5 truncate rounded px-2 py-1 text-xs hover:bg-tv-panel hover:text-tv-teal ${
                                  item.current ? 'font-semibold text-tv-teal' : item.done ? 'text-fg-muted' : 'text-fg-subtle'
                                }`}
                              >
                                <span className="shrink-0">{item.done ? '✓' : '·'}</span>
                                <span className="truncate">{item.label}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  className="block rounded px-3 py-2 text-sm text-fg-muted hover:bg-tv-panel hover:text-tv-teal"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </aside>
    </>
  )
}
