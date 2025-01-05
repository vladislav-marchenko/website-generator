import { Button } from './Button'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const navLinks = ['dashboard', 'templates', 'pricing']

export const HeaderNav = () => {
  const { publicKey } = useWallet()
  const { setVisible } = useWalletModal()
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextValues

  const publicKeyString = publicKey?.toString()

  return (
    <nav className='flex gap-8 items-center'>
      {navLinks.map((link) => (
        <Link
          key={link}
          to={`/${link}`}
          className='text-neutral-700 dark:text-neutral-200 capitalize hover:text-black dark:hover:text-white transition-colors duration-200'
        >
          {link}
        </Link>
      ))}
      {!publicKeyString && (
        <Button onClick={() => setVisible(true)} className='py-2'>
          Connect
        </Button>
      )}
      {publicKeyString && (
        <button className='flex gap-2 items-center'>
          <FaUserCircle size={24} />
          <span>{publicKeyString.slice(0, 8)}...</span>
        </button>
      )}
      <button
        onClick={toggleTheme}
        className='p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200'
      >
        {theme === 'dark' && <IoSunnyOutline size={28} />}
        {theme === 'light' && <IoMoonOutline size={28} />}
      </button>
    </nav>
  )
}
