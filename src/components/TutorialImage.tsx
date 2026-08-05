import { useEffect, useRef, useState } from 'react'
import { clearStoredImage, isImageFile, loadStoredImage, resizeImageToDataUrl, saveStoredImage } from '../lib/imageUpload'

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

  useEffect(() => {
    setImageUrl(loadStoredImage(id))
  }, [id])

  async function handleFile(file: File | undefined | null) {
    if (!file) return
    if (!isImageFile(file)) {
      setError('File na ito ay hindi image. Mag-upload ng PNG, JPG, o WebP.')
      return
    }
    setError(null)
    try {
      const dataUrl = await resizeImageToDataUrl(file)
      const saved = saveStoredImage(id, dataUrl)
      setImageUrl(dataUrl)
      if (!saved) {
        setError('Na-preview ang image pero hindi na-save locally (storage full). Mawawala ito pag nag-refresh.')
      }
    } catch {
      setError('Hindi na-process ang image. Subukan ulit ng ibang file.')
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
              className="absolute right-2 top-2 rounded bg-tv-bg/80 px-2 py-1 text-xs text-slate-300 opacity-0 transition-opacity hover:text-rose-300 group-hover:opacity-100"
            >
              Alisin
            </button>
          </>
        ) : (
          <div className="pointer-events-none text-center text-slate-500">
            <p className="text-2xl">🖼️</p>
            <p className="mt-1 text-xs">I-drag o i-click para mag-upload ng screenshot mo</p>
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-slate-400">{caption}</figcaption>
      {error && <p className="mt-1 text-xs text-amber-300">{error}</p>}
    </figure>
  )
}
