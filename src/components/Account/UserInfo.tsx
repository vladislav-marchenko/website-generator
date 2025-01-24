import { useWallet } from '@solana/wallet-adapter-react'
import { UserCircle2 } from 'lucide-react'

export const UserInfo = () => {
  const { publicKey } = useWallet()

  return (
    <div className='flex items-center gap-4'>
      <UserCircle2 size={64} />
      <span>Wallet Address: {publicKey?.toString()}</span>
    </div>
  )
}
