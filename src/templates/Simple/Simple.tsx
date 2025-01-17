import { ContractAddressButton } from '../ContractAddressButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface SimpleProps {
  data: TemplateData
  updateField?: UpdateField
}

export const Simple: FC<SimpleProps> = ({ data, updateField }) => {
  return (
    <TemplateLayout
      data={data}
      className='h-full max-w-5xl flex-row flex-wrap justify-center gap-12'
    >
      <Image
        data={data}
        fieldName='preview'
        className={{ image: 'rounded-xl' }}
      />
      <div className='flex flex-auto flex-col items-center'>
        <Text
          data={data}
          updateField={updateField}
          fieldName='ticker'
          as='h1'
          placeholder='Ticker'
        />
        <ContractAddressButton
          data={data}
          updateField={updateField}
          className='w-full'
        />
        <hr className='my-4 w-full border border-white' />
        <SocialLinks data={data} />
      </div>
    </TemplateLayout>
  )
}
