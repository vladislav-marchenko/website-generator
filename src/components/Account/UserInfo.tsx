import { Button } from '../Button'
import { useWallet } from '@solana/wallet-adapter-react'
import { UserCircle2 } from 'lucide-react'

export const UserInfo = () => {
  const { publicKey, disconnect } = useWallet()

  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <UserCircle2 size={64} />
        <span>Wallet Address: {publicKey?.toString()}</span>
      </div>
      <Button onClick={disconnect}>Sign Out</Button>
    </div>
  )
}
