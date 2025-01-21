import { RocketFAQ } from './FAQ'
import { RocketHeader } from './Header'
import { RocketHero } from './Hero'
import { RocketJoin } from './Join'
import { RocketMissionControl } from './MissionControl'
import { RocketRoadmap } from './Roadmap'
import { RocketTokenomics } from './Tokenomics'
import { loadFonts } from '@/lib/utils'
import { UpdateField } from '@/types'
import { ColorData, TemplateData } from '@/types/templates'
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
    <div className='flex h-full min-h-dvh flex-col overflow-y-auto bg-[#0e1019]'>
      <RocketHeader data={data} updateField={updateField} />
      <RocketHero
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <RocketTokenomics
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <RocketRoadmap
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
      />
      <RocketMissionControl
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <RocketFAQ
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
      />
      <RocketJoin
        data={data}
        updateField={updateField}
        primaryColor={primaryColor}
      />
    </div>
  )
}
