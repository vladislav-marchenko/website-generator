import { Button } from './Button'
import { CustomizeMenu } from './CustomizeMenu'
import { NavLink } from './NavLink'
import { headerNavLinks } from '@/consts'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { FaUserCircle } from 'react-icons/fa'

export const HeaderNav = () => {
  const { publicKey } = useWallet()
  const { setVisible } = useWalletModal()

  const publicKeyString = publicKey?.toString()

  return (
    <nav className='flex items-center gap-8'>
      {headerNavLinks.map((link) => (
        <NavLink key={link} to={`/${link}`}>
          {link}
        </NavLink>
      ))}
      {!publicKeyString && (
        <Button onClick={() => setVisible(true)} className='py-2'>
          Connect
        </Button>
      )}
      {publicKeyString && (
        <button className='flex items-center gap-2'>
          <FaUserCircle size={24} />
          <span>{publicKeyString.slice(0, 8)}...</span>
        </button>
      )}
      <CustomizeMenu />
    </nav>
  )
}
