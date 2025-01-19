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
    <div className='mx-auto flex max-w-4xl items-center justify-between gap-8 py-24'>
      <Text
        data={data}
        fieldName='ticker'
        updateField={updateField}
        defaultColor={primaryColor}
      />
      <AnimateCircle color={primaryColor}>
        <Text
          data={data}
          fieldName='projectName'
          updateField={updateField}
          className={{ text: 'uppercase' }}
        />
      </AnimateCircle>
    </div>
  )
}
