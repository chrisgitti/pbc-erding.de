import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function Container({ children, className = '', as: Tag = 'div' }: Props) {
  return (
    <Tag className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
