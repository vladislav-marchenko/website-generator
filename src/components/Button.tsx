import { cn } from '@/utils'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

const commonStyles =
  'px-4 py-3 font-bold text-lg rounded-full hover:scale-105 transiton-all duration-200'

const styles = {
  primary: 'bg-white text-black',
  outline: 'border-2 border-white hover:bg-white hover:text-black'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

type Props = {
  children: ReactNode
  className?: string
  to?: string
  variant?: keyof typeof styles
} & (ButtonProps | LinkProps)

export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  className,
  to,
  ...props
}) => {
  if (to) {
    return (
      <Link
        {...(props as LinkProps)}
        className={cn(styles[variant], commonStyles, className)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      {...(props as ButtonProps)}
      className={cn(styles[variant], commonStyles, className)}
    >
      {children}
    </button>
  )
}
