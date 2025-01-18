import { HeaderNav } from './HeaderNav'
import Logo from '@/assets/images/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='sticky top-0 z-20 w-full border-b border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900'>
      <div className='container flex items-center justify-between'>
        <Link to='/' className='text-xl font-bold uppercase'>
          <img src={Logo} alt='Aurora' />
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}
