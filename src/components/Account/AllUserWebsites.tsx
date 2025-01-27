import { Card } from '../Cards/Card'
import { Loading } from '../Loading'
import { Button } from '../ui/button'
import { DeleteWebsite } from './DeleteWebsite'
import { getUserWebsites } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useQuery } from '@tanstack/react-query'

export const AllUserWebsites = () => {
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

  return (
    <ul className='flex w-full flex-col gap-4'>
      {isError && (
        <span className='text-red-500'>Unable to fetch your websites</span>
      )}
      {!data?.length && (
        <div className='flex justify-center'>You have no websites yet</div>
      )}

      {!!data?.length &&
        data.map(({ name, template }) => (
          <li key={name} className='w-full'>
            <Card className='flex w-full flex-row items-center justify-between gap-4 p-4'>
              <div className='flex items-center gap-4'>
                <div className='h-12 w-12 rounded-full bg-neutral-500' />
                <div className='flex flex-col'>
                  <h4 className='text-2xl leading-none'>{name}</h4>
                  <span className='text-sm text-neutral-400'>{template}</span>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <Button>Edit</Button>
                <Button>Domain transfer</Button>
                <Button>Change domain</Button>
                <DeleteWebsite name={name} />
              </div>
            </Card>
          </li>
        ))}
    </ul>
  )
}
