import { RocketButton } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface RocketHeaderProps {
  data: TemplateData
  updateField?: UpdateField
}

export const RocketHeader: FC<RocketHeaderProps> = ({ data, updateField }) => {
  return (
    <header className='z-10 border-b border-neutral-800 bg-[#0a0a0a]/95'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3'>
        <Text data={data} fieldName='ticker' updateField={updateField} />
        <RocketButton href={data.links?.buyTickerLink?.url}>
          <Text data={data} fieldName='buyTicker' updateField={updateField} />
        </RocketButton>
      </div>
    </header>
  )
}
