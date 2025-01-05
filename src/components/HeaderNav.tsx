import { Button } from './Button'
import { CustomizeMenu } from './CustomizeMenu'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navLinks = ['dashboard', 'templates', 'pricing']

export const HeaderNav = () => {
  const { publicKey } = useWallet()
  const { setVisible } = useWalletModal()

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
      <CustomizeMenu />
    </nav>
  )
}
