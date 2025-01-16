import { ClassicButton } from './Button'
import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface ClassicBuyButtonProps {
  data: TemplateData
  updateField?: UpdateField
}

export const ClassicBuyButton: FC<ClassicBuyButtonProps> = ({
  data,
  updateField
}) => {
  if (!data.links?.buyNowLink) {
    return <TemplateItemError />
  }

  return (
    <ClassicButton className='min-w-72 rounded-full text-center text-3xl uppercase text-black'>
      <a
        href={data.links.buyNowLink.url}
        target='_blank'
        className='flex justify-center'
      >
        <Text data={data} updateField={updateField} fieldName='buyNowText' />
      </a>
    </ClassicButton>
  )
}
