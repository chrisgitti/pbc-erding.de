// Datumsberechnung Mittwochsturnier – genutzt in lib/data.ts und EventsSection.tsx

function lastWednesdayOfMonth(year: number, month: number): Date {
  const lastDay = new Date(year, month + 1, 0)
  const wd = lastDay.getDay() // 3 = Mittwoch
  const daysBack = (wd - 3 + 7) % 7
  return new Date(year, month, lastDay.getDate() - daysBack)
}

/** Gibt den nächsten (oder heutigen) letzten Mittwoch im Monat zurück. */
export function getNextMittwochsturnier(from: Date): Date {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  const thisMonth = lastWednesdayOfMonth(today.getFullYear(), today.getMonth())
  if (thisMonth >= today) return thisMonth
  const nm = today.getMonth() === 11 ? 0 : today.getMonth() + 1
  const ny = today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear()
  return lastWednesdayOfMonth(ny, nm)
}

/** Gibt die nächsten N Trainingstage (So/Di/Do) zurück. */
export type TrainingType = 'probetraining' | 'training'

export function getNextTrainingDays(
  from: Date,
  count: number,
): { date: Date; type: TrainingType }[] {
  const result: { date: Date; type: TrainingType }[] = []
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  while (result.length < count) {
    const wd = d.getDay()
    if (wd === 0) result.push({ date: new Date(d), type: 'probetraining' })
    else if (wd === 2 || wd === 4) result.push({ date: new Date(d), type: 'training' })
    d.setDate(d.getDate() + 1)
  }
  return result
}
