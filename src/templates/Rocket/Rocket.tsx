import { RocketHeader } from './Header'
import { RocketHero } from './Hero'
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
  const secondaryColor = (data?.secondaryColor as ColorData)?.value

  return (
    <div className='flex min-h-dvh flex-col bg-[#0e1019]'>
      <RocketHeader data={data} updateField={updateField} />
      <RocketHero
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  )
}
