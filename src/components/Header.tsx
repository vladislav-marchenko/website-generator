import { HeaderNav } from './HeaderNav'
import { PROJECT_NAME } from '@/consts'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='fixed left-0 top-0 z-20 w-full border-b border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900'>
      <div className='container flex items-center justify-between'>
        <Link to='/' className='text-xl font-bold uppercase'>
          {PROJECT_NAME}
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}
