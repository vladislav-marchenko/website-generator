import { Loading } from '../Loading'
import { Websites } from './Websites'
import { getUserWebsites } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useQuery } from '@tanstack/react-query'

export const UserWebsites = () => {
  const { publicKey: walletPublicKey } = useWallet()
  const publicKey = walletPublicKey?.toString() ?? ''

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userWebsites'],
    queryFn: () => getUserWebsites(publicKey)
  })

  if (isLoading) {
    return (
      <div className='flex justify-center py-12'>
        <Loading size={48} className='dark:fill-neutral-200' />
      </div>
    )
  }

  if (isError) {
    return <span className='text-red-500'>Unable to fetch your websites</span>
  }

  if (!data || !data.length) {
    return <div className='flex justify-center'>You have no websites yet</div>
  }

  return <Websites data={data} />
}
