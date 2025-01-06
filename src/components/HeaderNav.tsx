import { Button } from './Button'
import { CustomizeMenu } from './CustomizeMenu'
import { NavLink } from './NavLink'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTranslation } from 'react-i18next'
import { FaUserCircle } from 'react-icons/fa'

export const HeaderNav = () => {
  const { publicKey } = useWallet()
  const { setVisible } = useWalletModal()
  const publicKeyString = publicKey?.toString()

  const { t } = useTranslation()
  const headerNavLinks = t('header.navLinks', { returnObjects: true })

  return (
    <nav className='flex items-center gap-8'>
      {Object.values(headerNavLinks).map((link) => (
        <NavLink key={link} to={`/${link}`}>
          {link}
        </NavLink>
      ))}
      {!publicKeyString && (
        <Button onClick={() => setVisible(true)} className='py-2'>
          {t('header.connectButton')}
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
