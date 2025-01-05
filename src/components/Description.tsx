import { cn } from '@/utils'
import { FC, PropsWithChildren } from 'react'

export const Description: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => {
  return (
    <p
      className={cn(
        'text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-200',
        className
      )}
    >
      {children}
    </p>
  )
}
