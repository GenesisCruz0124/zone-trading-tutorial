import { useEffect, useRef, useState } from 'react'
import { clearStoredImage, isImageFile, loadStoredImage, resizeImageToDataUrl, saveStoredImage } from '../lib/imageUpload'
import { useSettings } from '../context/SettingsContext'
import { getContent } from '../i18n/content'

interface TutorialImageProps {
  id: string
  caption: string
  aspect?: 'video' | 'square'
}

export default function TutorialImage({ id, caption, aspect = 'video' }: TutorialImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { language } = useSettings()
  const { imagePlaceholder } = getContent(language)

  useEffect(() => {
    setImageUrl(loadStoredImage(id))
  }, [id])

  async function handleFile(file: File | undefined | null) {
    if (!file) return
    if (!isImageFile(file)) {
      setError(imagePlaceholder.unsupportedFileError)
      return
    }
    setError(null)
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
    if (inputRef.current) inputRef.current.value = ''
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
    </figure>
  )
}
