type Props = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  id,
  className = '',
}: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="inline-block h-px w-8 bg-gold-500/45" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-gold-500">
            {label}
          </span>
        </div>
      )}
      <h2
        id={id}
        className="text-4xl leading-none font-black uppercase tracking-[-0.03em] text-white sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/58 sm:text-[1.05rem]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
