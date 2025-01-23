import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface ClassicHowToBuyProps {
  data: TemplateData
  updateField?: UpdateField
}

export const ClassicHowToBuy: FC<ClassicHowToBuyProps> = ({
  data,
  updateField
}) => {
  return (
    <div className='flex flex-col items-center gap-4 pt-16'>
      <h2 className='tracking-wide'>How to Buy</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {['first', 'second', 'third'].map((name, index) => (
          <div
            key={name}
            className='flex max-w-72 flex-col items-center justify-between gap-8 rounded-xl bg-white p-6 text-black'
          >
            <div className='flex flex-col items-center gap-2'>
              <h3 className='text-3xl'>Step {index + 1}</h3>
              <Text
                data={data}
                updateField={updateField}
                fieldName={`${name}Step`}
                as='p'
              />
            </div>
            <Image
              data={data}
              fieldName={`${name}StepImage`}
              className={{ image: 'rounded-xl' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
