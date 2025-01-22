import { cn } from '@/lib/utils'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface FancyButtonProps {
  to: string
  children: ReactNode
  className?: string
}

export const FancyButton: FC<FancyButtonProps> = ({
  children,
  to,
  className
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'group relative flex cursor-pointer justify-center overflow-hidden whitespace-nowrap rounded-full px-6 py-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]',
        className
      )}
      style={
        {
          '--spread': '90deg',
          '--shimmer-color': '#ffffff',
          '--radius': '100px',
          '--speed': '1.5s',
          '--cut': '0.2em',
          '--bg': '#ffffff'
        } as React.CSSProperties
      }
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div className='rotate-gradient absolute inset-[-100%]'>
          <div
            className='absolute inset-0'
            style={{
              background:
                'conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, hsl(0, 0%, 60%) var(--spread), transparent var(--spread))'
            }}
          />
        </div>
      </div>
      <div className='absolute inset-[var(--cut)] rounded-lg bg-black dark:bg-white' />
      <span className='z-10 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-lg font-bold leading-none tracking-tight text-white dark:text-black'>
        {children}
      </span>
    </Link>
  )
}
