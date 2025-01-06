import { HeaderNav } from './HeaderNav'
import { PROJECT_NAME } from '@/consts'

export const Header = () => {
  return (
    <header className='fixed left-0 top-0 w-full p-5 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 z-10 shadow-sm'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        <span className='uppercase text-xl font-bold'>{PROJECT_NAME}</span>
        <HeaderNav />
      </div>
    </header>
  )
}
