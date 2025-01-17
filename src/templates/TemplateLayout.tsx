import { Image } from '@/components/TemplateItems/Image'
import { TemplateData } from '@/types'
import { FC, ReactNode } from 'react'

interface TemplateLayoutProps {
  children: ReactNode
  data: TemplateData
}

export const TemplateLayout: FC<TemplateLayoutProps> = ({ data, children }) => {
  return (
    <div className='relative h-full'>
      <div className='relative z-10 flex h-full flex-col items-center overflow-y-auto backdrop-blur-lg'>
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center gap-8 p-8 pt-16'>
          {children}
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
