import { RocketFAQ } from './FAQ'
import { RocketHeader } from './Header'
import { RocketHero } from './Hero'
import { RocketJoin } from './Join'
import { RocketMissionControl } from './MissionControl'
import { RocketRoadmap } from './Roadmap'
import { RocketTokenomics } from './Tokenomics'
import { useTemplateData } from '@/hooks/useTemplateData'
import { loadFonts } from '@/lib/utils'
import { ColorData } from '@/types/templates'
import { FC } from 'react'

loadFonts(['Orbitron'])

export const Rocket: FC = () => {
  const { data } = useTemplateData()
  if (!data) return <span>Something went wrong...</span>

  const primaryColor = (data?.primaryColor as ColorData)?.value
  const secondaryColor = (data?.secondaryColor as ColorData)?.value

  return (
    <div className='flex h-full min-h-dvh flex-col overflow-y-auto bg-[#0e1019]'>
      <RocketHeader />
      <RocketHero primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <RocketTokenomics
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <RocketRoadmap primaryColor={primaryColor} />
      <RocketMissionControl
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <RocketFAQ primaryColor={primaryColor} />
      <RocketJoin primaryColor={primaryColor} />
    </div>
  )
}
