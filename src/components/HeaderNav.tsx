import { Button } from './Button'
import { CustomizeMenu } from './CustomizeMenu'
import { NavLink } from './NavLink'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTranslation } from 'react-i18next'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
  const { connected, disconnect, publicKey: walletPublicKey } = useWallet()
  const { setVisible } = useWalletModal()
  const publicKey = walletPublicKey?.toString()

  const { t } = useTranslation()
  const headerNavLinks = t('header.navLinks', { returnObjects: true })

  return (
    <nav className='flex items-center gap-8'>
      {Object.values(headerNavLinks).map((link) => (
        <NavLink key={link} to={`/${link}`} className='font-arial-black'>
          {link}
        </NavLink>
      ))}
      {!connected && (
        <Button onClick={() => setVisible(true)} className='py-2'>
          {t('header.connectButton')}
        </Button>
      )}
      {connected && (
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center gap-2'>
            <FaUserCircle size={24} />
            <span>{publicKey?.slice(0, 8)}...</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link to='/account'>Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={disconnect}>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <CustomizeMenu />
    </nav>
  )
}
