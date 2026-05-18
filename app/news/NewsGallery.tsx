'use client'

import { useState, useEffect, useCallback } from 'react'
import type { NewsImage } from '@/lib/data'

export default function NewsGallery({ images }: { images: NewsImage[] }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const [current, setCurrent] = useState<number | null>(null)

  const open  = (i: number) => setCurrent(i)
  const close = useCallback(() => setCurrent(null), [])
  const prev  = useCallback(() => setCurrent(i => ((i ?? 0) - 1 + images.length) % images.length), [images.length])
  const next  = useCallback(() => setCurrent(i => ((i ?? 0) + 1) % images.length), [images.length])

  useEffect(() => {
    if (current === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     close()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [current, prev, next, close])

  return (
    <>
      {/* Thumbnails */}
      <div className={`grid gap-3 mb-10 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {images.map((img, i) => (
          <div key={i} className={images.length === 3 && i === 0 ? 'col-span-2' : ''}>
            <img
              src={`${basePath}/images/chronik/${img.src}`}
              alt={img.alt}
              className="w-full rounded-xl object-cover border border-white/8 cursor-pointer hover:opacity-90 transition-opacity"
              loading="lazy"
              onClick={() => open(i)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {current !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Schließen */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none p-2"
            onClick={close}
            aria-label="Schließen"
          >✕</button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl leading-none p-2"
              onClick={e => { e.stopPropagation(); prev() }}
              aria-label="Vorheriges Bild"
            >‹</button>
          )}

          {/* Bild */}
          <img
            src={`${basePath}/images/chronik/${images[current].src}`}
            alt={images[current].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl leading-none p-2"
              onClick={e => { e.stopPropagation(); next() }}
              aria-label="Nächstes Bild"
            >›</button>
          )}

          {/* Zähler */}
          {images.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {current + 1} / {images.length}
            </p>
          )}
        </div>
      )}
    </>
  )
}
