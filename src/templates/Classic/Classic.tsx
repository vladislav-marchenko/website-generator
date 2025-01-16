import { ClassicButton } from './Button'
import { ClassicCopyButton } from './CopyButton'
import { ClassicHowToBuy } from './HowToBuy'
import { Image } from '@/components/TemplateItems/Image'
import { Link } from '@/components/TemplateItems/Link'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { Copy } from 'lucide-react'
import { FC, useContext } from 'react'

export const Classic: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues

  return (
    <div className='relative h-full'>
      <div className='relative z-10 flex h-full flex-col items-center overflow-y-auto backdrop-blur-lg'>
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center gap-8 p-8 pt-16'>
          <header className='flex w-full items-center justify-between gap-4 pb-12'>
            <div className='flex items-center gap-4'>
              <Image
                fieldName='logoImage'
                className={{ image: 'rounded-full' }}
              />
              <Text fieldName='logoText' placeholder='Name' />
            </div>
            <div className='flex gap-4'>
              <Link fieldName='telegram' />
              <Link fieldName='tiktok' />
              <Link fieldName='discord' />
            </div>
          </header>
          <Text fieldName='ticker' as='h1' placeholder='Ticker' />
          <ClassicCopyButton />
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {Object.keys(data.links).map((key) => {
              return data.links[key].url && <Link fieldName={key} />
            })}
          </div>
          <Image fieldName='preview' className={{ image: 'rounded-xl' }} />
          <Text
            fieldName='description'
            className={{ wrapper: 'rounded-md bg-white p-1' }}
            placeholder='Description'
          />
          <ClassicButton className='rounded-full text-3xl text-black'>
            Buy now
          </ClassicButton>
          {data.showHowToBuy && <ClassicHowToBuy />}
        </div>
      </div>
      <Image
        fieldName='background'
        className={{
          wrapper: 'absolute left-0 top-0 h-full w-full',
          image: 'object-cover'
        }}
      />
    </div>
  )
}
