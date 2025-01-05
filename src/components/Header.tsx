import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return (
    <header className='fixed left-0 top-0 w-full p-5 border-b border-neutral-500 bg-white dark:bg-neutral-900 z-10'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        <span className='uppercase text-xl'>Aurora</span>
        <HeaderNav />
      </div>
    </header>
  )
}
