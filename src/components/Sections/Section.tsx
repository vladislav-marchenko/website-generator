import { cn } from '@/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn('h-screen px-8', className)} {...props}>
      {children}
    </section>
  )
}
