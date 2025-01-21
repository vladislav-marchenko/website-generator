import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface RocketFAQProps {
  data: TemplateData
  updateField?: UpdateField
  primaryColor: string
}

export const RocketFAQ: FC<RocketFAQProps> = ({
  data,
  updateField,
  primaryColor
}) => {
  return (
    <section className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-24'>
      <Text
        data={data}
        fieldName='FAQTitle'
        updateField={updateField}
        defaultColor={primaryColor}
        className={{ text: 'tracking-wider' }}
        as='h2'
      />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {['first', 'second', 'third', 'fourth'].map((item) => (
          <RocketCard key={item} className='max-w-full'>
            <Text
              data={data}
              fieldName={`${item}Question`}
              updateField={updateField}
              defaultColor={primaryColor}
            />
            <Text
              data={data}
              fieldName={`${item}Answer`}
              updateField={updateField}
            />
          </RocketCard>
        ))}
      </div>
    </section>
  )
}
