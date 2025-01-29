import { BuyButton } from '../BuyButton'
import { ContractAddressButton } from '../ContractAddressButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { ClassicHowToBuy } from './HowToBuy'
import { Image } from '@/components/TemplateItems/Image'
import { Link } from '@/components/TemplateItems/Link'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { ToggleData } from '@/types/templates'
import { FC, useContext } from 'react'

export const Classic: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return <span>Something went wrong...</span>

  return (
    <TemplateLayout className='h-dvh overflow-y-auto'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-8'>
        <header className='flex w-full items-center justify-between gap-4 pb-12'>
          <div className='flex items-center gap-4'>
            <Image
              fieldName='logoImage'
              className={{ image: 'rounded-full' }}
            />
            <Text fieldName='logoText' placeholder='Name' />
          </div>
          <div className='flex gap-4'>
            {data.links?.telegram?.url && <Link fieldName='telegram' />}
            {data.links?.tiktok?.url && <Link fieldName='tiktok' />}
            {data.links?.discord?.url && <Link fieldName='discord' />}
          </div>
        </header>
        <Text fieldName='ticker' as='h1' placeholder='Ticker' />
        <ContractAddressButton />
        <SocialLinks />
        <Image fieldName='preview' className={{ image: 'rounded-xl' }} />
        <Text
          fieldName='description'
          className={{ wrapper: 'rounded-md bg-white p-1' }}
          placeholder='Description'
        />
        <BuyButton className='min-w-72 rounded-full text-center text-3xl uppercase text-black' />
        {(data?.showHowToBuy as ToggleData)?.value && <ClassicHowToBuy />}
      </div>
    </TemplateLayout>
  )
}
