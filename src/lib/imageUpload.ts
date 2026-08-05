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
