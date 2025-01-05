import { Button } from './Button'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navLinks = ['dashboard', 'templates', 'pricing']

export const Header = () => {
  const { publicKey } = useWallet()
  const { setVisible } = useWalletModal()

  const publicKeyString = publicKey?.toString()

  return (
    <header className='sticky top-0 p-5 border-b border-neutral-500 bg-neutral-900 z-10'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        <span className='uppercase text-xl'>Aurora</span>
        <nav className='flex gap-8 items-center'>
          {navLinks.map((link) => (
            <Link
              to={`/${link}`}
              className='relative capitalize after:block after:rounded-full after:position-absolute after:top-full after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-[width] after:duration-200'
            >
              {link}
            </Link>
          ))}

          {!publicKeyString && (
            <Button onClick={() => setVisible(true)}>Connect</Button>
          )}
          {publicKeyString && (
            <button className='flex gap-2 items-center'>
              <FaUserCircle size={24} />
              <span>{publicKeyString.slice(0, 8)}...</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
