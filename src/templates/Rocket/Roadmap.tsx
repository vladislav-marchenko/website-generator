import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface RocketHeroProps {
  data: TemplateData
  updateField?: UpdateField
  primaryColor: string
}

export const RocketRoadmap: FC<RocketHeroProps> = ({
  data,
  updateField,
  primaryColor
}) => {
  return (
    <section className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-24'>
      <Text
        data={data}
        fieldName='missionTimelineTitle'
        updateField={updateField}
        defaultColor={primaryColor}
        className={{ text: 'tracking-wider' }}
        as='h2'
      />
      <div className='flex w-full flex-wrap justify-center gap-4'>
        {['first', 'second', 'third'].map((item) => (
          <RocketCard key={item} className='max-w-[370px] flex-auto'>
            <div
              className='max-w-max rounded-full px-4 py-2'
              style={{ background: primaryColor }}
            >
              <Text
                data={data}
                fieldName={`${item}TimelinePhaseTitle`}
                updateField={updateField}
              />
            </div>
            <Text
              data={data}
              fieldName={`${item}TimelineTitle`}
              updateField={updateField}
            />
            <Text
              data={data}
              fieldName={`${item}TimelineDescription`}
              updateField={updateField}
            />
            <Text
              data={data}
              fieldName={`${item}TimelineDate`}
              updateField={updateField}
            />
          </RocketCard>
        ))}
      </div>
    </section>
  )
}
