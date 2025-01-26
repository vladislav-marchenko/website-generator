import { RocketButton } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { useTemplateData } from '@/hooks/useTemplateData'
import { FC } from 'react'

export const RocketHeader: FC = () => {
  const { data } = useTemplateData()
  if (!data) return

  return (
    <header className='sticky top-0 z-10 border-b border-neutral-800 bg-[#0a0a0a]/95 backdrop-blur-md'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3'>
        <Text fieldName='ticker' />
        <RocketButton href={data.links?.buyTickerLink?.url}>
          <Text fieldName='buyTicker' />
        </RocketButton>
      </div>
    </header>
  )
}
