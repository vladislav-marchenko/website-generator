import { ClassicBuyButton } from './BuyButton'
import { ClassicCopyButton } from './CopyButton'
import { ClassicHowToBuy } from './HowToBuy'
import { Image } from '@/components/TemplateItems/Image'
import { Link } from '@/components/TemplateItems/Link'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface ClassicProps {
  data: TemplateData
  updateField?: UpdateField
}

export const Classic: FC<ClassicProps> = ({ data, updateField }) => {
  return (
    <div className='relative h-full'>
      <div className='relative z-10 flex h-full flex-col items-center overflow-y-auto backdrop-blur-lg'>
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center gap-8 p-8 pt-16'>
          <header className='flex w-full items-center justify-between gap-4 pb-12'>
            <div className='flex items-center gap-4'>
              <Image
                data={data}
                fieldName='logoImage'
                className={{ image: 'rounded-full' }}
              />
              <Text
                data={data}
                updateField={updateField}
                fieldName='logoText'
                placeholder='Name'
              />
            </div>
            <div className='flex gap-4'>
              {data.links?.telegram?.url && (
                <Link data={data} fieldName='telegram' />
              )}
              {data.links?.tiktok?.url && (
                <Link data={data} fieldName='tiktok' />
              )}
              {data.links?.discord?.url && (
                <Link data={data} fieldName='discord' />
              )}
            </div>
          </header>
          <Text
            data={data}
            updateField={updateField}
            fieldName='ticker'
            as='h1'
            placeholder='Ticker'
          />
          <ClassicCopyButton data={data} />
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {Object.keys(data.links).map((key) => {
              return data.links[key].url && <Link data={data} fieldName={key} />
            })}
          </div>
          <Image
            data={data}
            fieldName='preview'
            className={{ image: 'rounded-xl' }}
          />
          <Text
            data={data}
            updateField={updateField}
            fieldName='description'
            className={{ wrapper: 'rounded-md bg-white p-1' }}
            placeholder='Description'
          />
          <ClassicBuyButton data={data} updateField={updateField} />
          {data.showHowToBuy && (
            <ClassicHowToBuy data={data} updateField={updateField} />
          )}
        </div>
      </div>
      <Image
        data={data}
        fieldName='background'
        className={{
          wrapper: 'absolute left-0 top-0 h-full w-full',
          image: 'object-cover'
        }}
      />
    </div>
  )
}
