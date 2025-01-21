import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface RocketTokenomicsProps {
  data: TemplateData
  updateField?: UpdateField
  primaryColor: string
  secondaryColor: string
}

export const RocketTokenomics: FC<RocketTokenomicsProps> = ({
  data,
  updateField,
  primaryColor,
  secondaryColor
}) => {
  return (
    <section className='bg-[#0a0a0a]/95 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <Text
          data={data}
          fieldName='tokenomicsTitle'
          updateField={updateField}
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex flex-wrap justify-center gap-4'>
          {['first', 'second', 'third', 'fourth'].map((item) => (
            <RocketCard key={item} className='items-center'>
              <Text
                data={data}
                fieldName={`${item}TokenomicsIcon`}
                updateField={updateField}
                defaultColor={primaryColor}
                style={{ filter: `drop-shadow(0 0 10px ${primaryColor})` }}
              />
              <Text
                data={data}
                fieldName={`${item}TokenomicsTitle`}
                updateField={updateField}
                defaultColor={primaryColor}
              />
              <Text
                data={data}
                fieldName={`${item}TokenomicsValue`}
                updateField={updateField}
                defaultColor={secondaryColor}
              />
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
