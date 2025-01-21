import { RocketCard } from './Card'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface RocketMissionControlProps {
  data: TemplateData
  updateField?: UpdateField
  primaryColor: string
  secondaryColor: string
}

export const RocketMissionControl: FC<RocketMissionControlProps> = ({
  data,
  updateField,
  primaryColor
}) => {
  return (
    <section className='bg-[#0a0a0a]/95 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <Text
          data={data}
          fieldName='missionControlTitle'
          updateField={updateField}
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex w-full flex-wrap justify-center gap-4'>
          {['first', 'second', 'third'].map((item) => (
            <RocketCard
              key={item}
              className='max-w-[370px] flex-auto items-center'
            >
              <Image
                data={data}
                fieldName={`${item}ControlAvatar`}
                className={{ image: 'rounded-full object-contain' }}
              />
              <Text
                data={data}
                fieldName={`${item}ControlName`}
                updateField={updateField}
                defaultColor={primaryColor}
              />
              <Text
                data={data}
                fieldName={`${item}ControlJob`}
                updateField={updateField}
                defaultColor={primaryColor}
              />
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
