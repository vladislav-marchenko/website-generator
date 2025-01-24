import { UserInfo } from '@/components/Account/UserInfo'
import { UserWebsites } from '@/components/Account/UserWebsites'
import { useWallet } from '@solana/wallet-adapter-react'

export const Account = () => {
  const { publicKey } = useWallet()

  if (!publicKey) return <span>It seems like you're not authorized</span>

  return (
    <div className='container py-24'>
      <UserInfo />
      <hr className='my-4 border-b border-neutral-200 dark:border-neutral-700' />
      <UserWebsites />
    </div>
  )
}
