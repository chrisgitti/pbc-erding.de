'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

export type Photo = {
  src: string
  alt: string
  label: string
  quote?: string
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const SLIDESHOW_INTERVAL = 4000

export default function GalerieGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isOpen = index !== null
  const active = index !== null ? photos[index] : null

  const close = useCallback(() => {
    setIndex(null)
    setPlaying(false)
  }, [])

  const prev = useCallback(() => {
    setIndex(i => i === null ? null : (i - 1 + photos.length) % photos.length)
  }, [photos.length])

  const next = useCallback(() => {
    setIndex(i => i === null ? null : (i + 1) % photos.length)
  }, [photos.length])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === ' ')          setPlaying(p => !p)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, prev, next])

  // Slideshow timer
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (playing && isOpen) {
      timerRef.current = setTimeout(next, SLIDESHOW_INTERVAL)
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [playing, isOpen, index, next])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-4">
        {photos.map((photo, i) => (
          <div key={i} className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => { setIndex(i); setPlaying(false) }}
              className="group relative overflow-hidden rounded-[1.25rem] border border-white/6 bg-charcoal-900 aspect-[4/3] cursor-zoom-in hover:border-gold-500/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
              aria-label={`${photo.alt} – vergrößern`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${base}${photo.src}`}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.label}
              </span>
            </button>
            {photo.quote && (
              <p className="px-2 py-1.5 text-[0.85rem] sm:text-[0.875rem] leading-relaxed text-white/80 italic text-center bg-white/5 rounded-xl">
                „{photo.quote}"
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active && index !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Top bar */}
          <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent z-10">
            <span className="rounded-full bg-black/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              {active.label}
            </span>
            <div className="flex items-center gap-2">
              {/* Slideshow toggle */}
              <button
                type="button"
                onClick={() => setPlaying(p => !p)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label={playing ? 'Diashow pausieren' : 'Diashow starten'}
                title={playing ? 'Diashow pausieren' : 'Diashow starten'}
              >
                {playing ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                )}
              </button>
              {/* Close */}
              <button
                type="button"
                onClick={close}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>

          {/* Prev button */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors cursor-pointer"
            aria-label="Vorheriges Bild"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Image */}
          <img
            key={active.src}
            src={`${base}${active.src}`}
            alt={active.alt}
            className="max-h-[calc(100vh-7rem)] max-w-[calc(100vw-6rem)] sm:max-w-[calc(100vw-8rem)] object-contain rounded-xl shadow-2xl"
            // eslint-disable-next-line @next/next/no-img-element
          />

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            className="absolute right-2 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors cursor-pointer"
            aria-label="Nächstes Bild"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Bottom bar: quote + counter + dots */}
          <div className="absolute bottom-0 inset-x-0 flex flex-col items-center gap-3 pb-5 pt-8 bg-gradient-to-t from-black/60 to-transparent z-10">
            {active.quote && (
              <p className="mx-4 px-5 py-2.5 text-center text-[0.85rem] sm:text-sm leading-relaxed text-white/90 italic max-w-lg bg-black/70 rounded-xl border border-white/10">
                „{active.quote}"
              </p>
            )}
            {/* Dot indicators */}
            <div className="flex gap-1.5 flex-wrap justify-center px-8">
              {photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-200 cursor-pointer ${i === index ? 'w-5 h-1.5 bg-gold-500' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Bild ${i + 1}`}
                />
              ))}
            </div>
            {/* Counter */}
            <span className="text-xs font-semibold tracking-[0.18em] text-white/50">
              {index + 1} / {photos.length}
            </span>
          </div>

          {/* Click outside (backdrop) */}
          <div className="absolute inset-0 -z-10" onClick={close} aria-hidden="true" />
        </div>
      )}
    </>
  )
}
