import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variants = {
  primary:
    'bg-gold-500 text-charcoal-950 shadow-[0_12px_30px_rgba(212,160,67,0.18)] hover:bg-gold-400 hover:-translate-y-px font-semibold',
  secondary:
    'bg-green-700 text-white shadow-[0_12px_30px_rgba(19,77,34,0.22)] hover:bg-green-600 hover:-translate-y-px font-semibold',
  outline:
    'border border-white/18 bg-white/[0.02] text-white hover:border-gold-500 hover:bg-white/[0.05] hover:text-gold-500 font-medium',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full tracking-[0.08em] uppercase transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
