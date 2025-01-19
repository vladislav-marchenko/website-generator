import { FC, ReactNode } from 'react'

interface AnimatedCircleProps {
  color: string
  children: ReactNode
}

export const AnimateCircle: FC<AnimatedCircleProps> = ({ color, children }) => {
  return (
    <div className='relative'>
      <div
        className='flex aspect-square h-full w-full min-w-[400px] animate-spring items-center justify-center rounded-full bg-white p-24 text-center'
        style={{
          filter: `drop-shadow(0 0 20px color-mix(in srgb, ${color} 30%, transparent))`
        }}
      >
        {children}
        <div className='absolute left-1/2 top-1/2 flex h-[120%] w-[160%] -translate-x-1/2 -translate-y-1/2'>
          <div className='h-full w-full animate-[spin_10s_linear_infinite] rounded-[50%] border-2 border-neutral-600'>
            <div
              className='absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full'
              style={{ background: color }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
