import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const ClassicButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-md border-4 border-b-8 border-black bg-white px-8 py-4',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
