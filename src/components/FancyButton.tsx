import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

export const FancyButton: FC<PropsWithChildren<{ to: string }>> = ({
  children,
  to
}) => {
  return (
    <Link
      to={to}
      className='group relative flex cursor-pointer justify-center overflow-hidden whitespace-nowrap rounded-full px-6 py-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]'
      style={
        {
          '--spread': '90deg',
          '--shimmer-color': '#ffffff',
          '--radius': '100px',
          '--speed': '1.5s',
          '--cut': '0.1em',
          '--bg':
            'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(30, 30, 65))'
        } as React.CSSProperties
      }
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div className='rotate-gradient absolute inset-[-100%]'>
          <div
            className='absolute inset-0'
            style={{
              background:
                'conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, hsl(274, 100%, 50%) var(--spread), transparent var(--spread))'
            }}
          ></div>
        </div>
      </div>
      <div
        className='absolute'
        style={{
          background: 'var(--bg)',
          borderRadius: 'var(--radius)',
          inset: 'var(--cut)'
        }}
      ></div>
      <span className='z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-lg font-bold leading-none tracking-tight text-white'>
        {children}
      </span>
    </Link>
  )
}
