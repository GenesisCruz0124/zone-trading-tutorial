interface TutorialImageProps {
  caption: string
  aspect?: 'video' | 'square'
}

export default function TutorialImage({ caption, aspect = 'video' }: TutorialImageProps) {
  return (
    <figure className="mt-5 max-w-3xl">
      <div
        className={`flex items-center justify-center rounded-lg border-2 border-dashed border-tv-border bg-tv-panel text-slate-500 ${
          aspect === 'video' ? 'aspect-video' : 'aspect-square'
        }`}
      >
        <div className="text-center">
          <p className="text-2xl">🖼️</p>
          <p className="mt-1 text-xs">Ilagay dito ang screenshot mo</p>
        </div>
      </div>
      <figcaption className="mt-2 text-sm text-slate-400">{caption}</figcaption>
    </figure>
  )
}
