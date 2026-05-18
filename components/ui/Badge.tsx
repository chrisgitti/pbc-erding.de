type Props = {
  children: React.ReactNode
  variant?: 'green' | 'gold' | 'neutral' | 'red'
}

const variants = {
  green: 'bg-green-800 text-green-300 border border-green-700',
  gold: 'bg-gold-500/10 text-gold-400 border border-gold-500/30',
  neutral: 'bg-white/5 text-white/75 border border-white/10',
  red: 'bg-red-900/30 text-red-300 border border-red-800/50',
}

export default function Badge({ children, variant = 'neutral' }: Props) {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase ${variants[variant]}`}>
      {children}
    </span>
  )
}
