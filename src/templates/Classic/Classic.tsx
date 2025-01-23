import { BuyButton } from '../BuyButton'
import { ContractAddressButton } from '../ContractAddressButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { ClassicHowToBuy } from './HowToBuy'
import { Image } from '@/components/TemplateItems/Image'
import { Link } from '@/components/TemplateItems/Link'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData, ToggleData } from '@/types/templates'
import { FC } from 'react'

interface ClassicProps {
  data: TemplateData
  updateField?: UpdateField
}

export const Classic: FC<ClassicProps> = ({ data, updateField }) => {
  return (
    <TemplateLayout data={data} className='h-dvh overflow-y-auto'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-8'>
        <header className='flex w-full items-center justify-between gap-4 pb-12'>
          <div className='flex items-center gap-4'>
            <Image
              data={data}
              fieldName='logoImage'
              className={{ image: 'rounded-full' }}
            />
            <Text
              data={data}
              updateField={updateField}
              fieldName='logoText'
              placeholder='Name'
            />
          </div>
          <div className='flex gap-4'>
            {data.links?.telegram?.url && (
              <Link data={data} fieldName='telegram' />
            )}
            {data.links?.tiktok?.url && <Link data={data} fieldName='tiktok' />}
            {data.links?.discord?.url && (
              <Link data={data} fieldName='discord' />
            )}
          </div>
        </header>
        <Text
          data={data}
          updateField={updateField}
          fieldName='ticker'
          as='h1'
          placeholder='Ticker'
        />
        <ContractAddressButton data={data} updateField={updateField} />
        <SocialLinks data={data} />
        <Image
          data={data}
          fieldName='preview'
          className={{ image: 'rounded-xl' }}
        />
        <Text
          data={data}
          updateField={updateField}
          fieldName='description'
          className={{ wrapper: 'rounded-md bg-white p-1' }}
          placeholder='Description'
        />
        <BuyButton
          data={data}
          updateField={updateField}
          className='min-w-72 rounded-full text-center text-3xl uppercase text-black'
        />
        {(data?.showHowToBuy as ToggleData)?.value && (
          <ClassicHowToBuy data={data} updateField={updateField} />
        )}
      </div>
    </TemplateLayout>
  )
}
