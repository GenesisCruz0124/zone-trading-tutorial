import { useEffect, useRef, useState } from 'react'
import {
  analyzeImageQuality,
  clearStoredImage,
  isImageFile,
  loadStoredImage,
  resizeImageToDataUrl,
  saveStoredImage,
} from '../lib/imageUpload'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface TutorialImageProps {
  id: string
  caption: string
  aspect?: 'video' | 'square'
}

type CheckState =
  | { status: 'idle' }
  | { status: 'checking' }
  | { status: 'ok' }
  | { status: 'warning'; messages: string[] }
  | { status: 'failed' }

export default function TutorialImage({ id, caption, aspect = 'video' }: TutorialImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [checkState, setCheckState] = useState<CheckState>({ status: 'idle' })
  const inputRef = useRef<HTMLInputElement>(null)
  const { language } = useSettings()
  const { imagePlaceholder } = getContent(language)

  useEffect(() => {
    setImageUrl(loadStoredImage(id))
    setCheckState({ status: 'idle' })
  }, [id])

  async function handleFile(file: File | undefined | null) {
    if (!file) return
    if (!isImageFile(file)) {
      setError(imagePlaceholder.unsupportedFileError)
      return
    }
    setError(null)
    setCheckState({ status: 'idle' })
    try {
      const dataUrl = await resizeImageToDataUrl(file)
      const saved = saveStoredImage(id, dataUrl)
      setImageUrl(dataUrl)
      if (!saved) {
        setError(imagePlaceholder.quotaWarning)
      }
    } catch {
      setError(imagePlaceholder.processError)
    }
  }

  function handleRemove(e: React.MouseEvent) {
    e.stopPropagation()
    clearStoredImage(id)
    setImageUrl(null)
    setError(null)
    setCheckState({ status: 'idle' })
    if (inputRef.current) inputRef.current.value = ''
  }

  async function handleCheck(e: React.MouseEvent) {
    e.stopPropagation()
    if (!imageUrl) return
    setCheckState({ status: 'checking' })
    try {
      const result = await analyzeImageQuality(imageUrl)
      const messages: string[] = []
      if (result.tooSmall) messages.push(imagePlaceholder.checkTooSmall)
      if (result.likelyBlank) messages.push(imagePlaceholder.checkLikelyBlank)
      setCheckState(messages.length > 0 ? { status: 'warning', messages } : { status: 'ok' })
    } catch {
      setCheckState({ status: 'failed' })
    }
  }

  return (
    <figure className="mt-5 max-w-3xl">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
        }}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
          handleFile(e.dataTransfer.files?.[0])
        }}
        className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-dashed transition-colors ${
          aspect === 'video' ? 'aspect-video' : 'aspect-square'
        } ${
          isDragging
            ? 'border-tv-teal bg-tv-teal/10'
            : imageUrl
              ? 'border-tv-border bg-tv-panel'
              : 'border-tv-border bg-tv-panel hover:border-tv-teal/60'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {imageUrl ? (
          <>
            <img src={imageUrl} alt={caption} className="h-full w-full object-contain" />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute right-2 top-2 rounded bg-tv-bg/80 px-2 py-1 text-xs text-fg-muted opacity-0 transition-opacity hover:text-danger-fg group-hover:opacity-100"
            >
              {imagePlaceholder.removeLabel}
            </button>
          </>
        ) : (
          <div className="pointer-events-none text-center text-fg-subtle">
            <p className="text-2xl">🖼️</p>
            <p className="mt-1 text-xs">{imagePlaceholder.prompt}</p>
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-fg-muted">{caption}</figcaption>
      {error && <p className="mt-1 text-xs text-warn-fg">{error}</p>}

      {imageUrl && (
        <div className="mt-2">
          <button
            type="button"
            onClick={handleCheck}
            disabled={checkState.status === 'checking'}
            className="rounded border border-tv-border px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-tv-teal/60 hover:text-tv-teal disabled:opacity-60"
          >
            {checkState.status === 'checking' ? imagePlaceholder.checkingLabel : imagePlaceholder.checkButtonLabel}
          </button>

          {checkState.status === 'ok' && (
            <p className="mt-2 text-xs text-tv-teal">✓ {imagePlaceholder.checkOk}</p>
          )}
          {checkState.status === 'warning' && (
            <ul className="mt-2 space-y-1">
              {checkState.messages.map((msg, idx) => (
                <li key={idx} className="text-xs text-warn-fg">
                  ⚠ {msg}
                </li>
              ))}
            </ul>
          )}
          {checkState.status === 'failed' && (
            <p className="mt-2 text-xs text-danger-fg">{imagePlaceholder.checkFailed}</p>
          )}
        </div>
      )}
    </figure>
  )
}
