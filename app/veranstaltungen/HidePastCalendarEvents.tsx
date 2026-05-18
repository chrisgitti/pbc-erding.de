'use client'
import { useEffect } from 'react'

export default function HidePastCalendarEvents() {
  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    document.querySelectorAll<HTMLElement>('[data-cal-date]').forEach(el => {
      if (new Date(el.dataset.calDate + 'T00:00:00') < today) {
        el.style.display = 'none'
      }
    })
  }, [])
  return null
}
