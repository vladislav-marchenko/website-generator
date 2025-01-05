import { cn } from '@/utils'
import { FC, PropsWithChildren } from 'react'

export const Section: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => {
  return (
    <section className={cn('h-[calc(100vh-69px)] px-8', className)}>
      {children}
    </section>
  )
}
