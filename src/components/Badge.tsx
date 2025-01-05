import { FC, PropsWithChildren } from 'react'

export const Badge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-max text-sm font-bold px-2 py-0.5 rounded-full bg-black text-white dark:bg-white dark:text-black'>
      {children}
    </div>
  )
}
