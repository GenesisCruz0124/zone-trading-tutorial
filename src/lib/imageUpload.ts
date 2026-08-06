const MAX_DIMENSION = 1600
const JPEG_QUALITY = 0.82

export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/')
}

export async function resizeImageToDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height))
  const width = Math.round(bitmap.width * scale)
  const height = Math.round(bitmap.height * scale)

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas not supported')
  ctx.drawImage(bitmap, 0, 0, width, height)

  return canvas.toDataURL('image/jpeg', JPEG_QUALITY)
}

const MIN_WIDTH = 300
const MIN_HEIGHT = 200
const BLANK_STDDEV_THRESHOLD = 8

export interface ImageQualityResult {
  width: number
  height: number
  tooSmall: boolean
  likelyBlank: boolean
}

function loadImageElement(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = src
  })
}

export async function analyzeImageQuality(dataUrl: string): Promise<ImageQualityResult> {
  const img = await loadImageElement(dataUrl)
  const sampleWidth = Math.min(img.width, 200)
  const sampleHeight = Math.max(1, Math.round((img.height / img.width) * sampleWidth))

  const canvas = document.createElement('canvas')
  canvas.width = sampleWidth
  canvas.height = sampleHeight
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas not supported')
  ctx.drawImage(img, 0, 0, sampleWidth, sampleHeight)

  const { data } = ctx.getImageData(0, 0, sampleWidth, sampleHeight)
  const pixelCount = sampleWidth * sampleHeight
  let sum = 0
  let sumSq = 0
  for (let i = 0; i < data.length; i += 4) {
    const luminance = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    sum += luminance
    sumSq += luminance * luminance
  }
  const mean = sum / pixelCount
  const variance = sumSq / pixelCount - mean * mean
  const stdDev = Math.sqrt(Math.max(variance, 0))

  return {
    width: img.width,
    height: img.height,
    tooSmall: img.width < MIN_WIDTH || img.height < MIN_HEIGHT,
    likelyBlank: stdDev < BLANK_STDDEV_THRESHOLD,
  }
}

const STORAGE_PREFIX = 'zone-tutorial-img:'

export function loadStoredImage(id: string): string | null {
  try {
    return localStorage.getItem(STORAGE_PREFIX + id)
  } catch {
    return null
  }
}

export function saveStoredImage(id: string, dataUrl: string): boolean {
  try {
    localStorage.setItem(STORAGE_PREFIX + id, dataUrl)
    return true
  } catch {
    return false
  }
}

export function clearStoredImage(id: string): void {
  try {
    localStorage.removeItem(STORAGE_PREFIX + id)
  } catch {
    // ignore
  }
}
