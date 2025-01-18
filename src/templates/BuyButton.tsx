import { Button } from './Button'
import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Text } from '@/components/TemplateItems/Text'
import { cn } from '@/lib/utils'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface ClassicBuyButtonProps {
  data: TemplateData
  updateField?: UpdateField
  className?: string
}

export const BuyButton: FC<ClassicBuyButtonProps> = ({
  data,
  updateField,
  className
}) => {
  if (!data.links?.buyNowLink) {
    return <TemplateItemError />
  }

  return (
    <Button className={cn('overflow-hidden p-0', className)}>
      <a
        href={data.links.buyNowLink.url}
        target='_blank'
        className='flex justify-center'
      >
        <Text
          data={data}
          updateField={updateField}
          fieldName='buyNowText'
          className={{ text: 'inline-block px-6 py-3' }}
        />
      </a>
    </Button>
  )
}
