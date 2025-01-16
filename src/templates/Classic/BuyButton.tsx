import { ClassicButton } from './Button'
import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const ClassicBuyButton = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues

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
        <Text fieldName='buyNowText' />
      </a>
    </ClassicButton>
  )
}
