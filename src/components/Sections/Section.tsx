import { cn } from '@/lib/utils'
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
    <section
      className={cn('h-full min-h-[calc(100vh-85px)] p-8', className)}
      {...props}
    >
      {children}
    </section>
  )
}
