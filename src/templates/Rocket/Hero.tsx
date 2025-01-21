import { AnimateCircle } from './AnimatedCircle'
import { RocketButton } from './Button'
import { RocketCopyButton } from './CopyButton'
import { Text } from '@/components/TemplateItems/Text'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface RocketHeroProps {
  data: TemplateData
  updateField?: UpdateField
  primaryColor: string
  secondaryColor: string
}

export const RocketHero: FC<RocketHeroProps> = ({
  data,
  updateField,
  primaryColor,
  secondaryColor
}) => {
  return (
    <div className='mx-auto flex min-h-dvh w-full max-w-6xl flex-auto items-center gap-40 py-24'>
      <div className='flex max-w-lg flex-col gap-6'>
        <Text
          data={data}
          fieldName='heroTitle'
          updateField={updateField}
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h1'
        />
        <Text data={data} fieldName='ticker' updateField={updateField} />
        <Text
          data={data}
          fieldName='description'
          updateField={updateField}
          placeholder='Description...'
        />
        <div className='flex flex-col gap-2'>
          <Text
            data={data}
            fieldName='contractAddressLabel'
            updateField={updateField}
          />
          <RocketCopyButton
            data={data}
            updateField={updateField}
            color={primaryColor}
          />
        </div>
        <div className='flex gap-4'>
          <RocketButton
            href={data.links?.buyNowLink?.url}
            className='px-8 py-4'
            style={{
              background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`
            }}
          >
            <Text data={data} fieldName='buyNow' updateField={updateField} />
          </RocketButton>
          <RocketButton
            href={data.links?.joinUsLink?.url}
            className='px-8 py-4'
          >
            <Text data={data} fieldName='joinUs' updateField={updateField} />
          </RocketButton>
        </div>
      </div>
      <AnimateCircle
        data={data}
        updateField={updateField}
        color={primaryColor}
      />
    </div>
  )
}
