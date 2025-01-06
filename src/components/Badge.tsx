import { FC, PropsWithChildren } from 'react'

export const Badge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-max rounded-full bg-black px-2 py-0.5 text-sm font-bold text-white dark:bg-white dark:text-black'>
      {children}
    </div>
  )
}
