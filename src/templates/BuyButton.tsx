import { Button } from './Button'
import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Text } from '@/components/TemplateItems/Text'
import { useTemplateData } from '@/hooks/useTemplateData'
import { cn } from '@/lib/utils'
import { FC } from 'react'

export const BuyButton: FC<{ className?: string }> = ({ className }) => {
  const { data } = useTemplateData()

  if (!data?.links?.buyNowLink) {
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
          fieldName='buyNowText'
          className={{ text: 'inline-block px-6 py-3' }}
        />
      </a>
    </Button>
  )
}
