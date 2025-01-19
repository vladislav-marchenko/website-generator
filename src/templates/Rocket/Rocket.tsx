import { AnimateCircle } from './AnimatedCircle'
import { Text } from '@/components/TemplateItems/Text'
import { loadFonts } from '@/lib/utils'
import { ColorData, TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface RocketProps {
  data: TemplateData
  updateField?: UpdateField
}

loadFonts(['Orbitron'])

export const Rocket: FC<RocketProps> = ({ data, updateField }) => {
  const primaryColor = (data?.primaryColor as ColorData)?.value

  return (
    <div className='mx-auto flex max-w-7xl items-center gap-32 py-24'>
      <div className='flex flex-col gap-4'>
        <Text
          data={data}
          fieldName='heroTitle'
          updateField={updateField}
          defaultColor={primaryColor}
        />
        <Text
          data={data}
          fieldName='ticker'
          updateField={updateField}
          defaultColor={primaryColor}
        />
      </div>
      <AnimateCircle
        data={data}
        updateField={updateField}
        color={primaryColor}
      />
    </div>
  )
}
