import { Image } from '@/components/TemplateItems/Image'
import { cn } from '@/lib/utils'
import { TemplateData } from '@/types'
import { FC, ReactNode } from 'react'

interface TemplateLayoutProps {
  children: ReactNode
  data: TemplateData
  className?: string
}

export const TemplateLayout: FC<TemplateLayoutProps> = ({
  data,
  children,
  className
}) => {
  return (
    <div className='relative h-full'>
      <div className='relative z-10 flex h-full flex-col items-center backdrop-blur-lg'>
        <div
          className={cn(
            'mx-auto flex h-full w-full max-w-6xl flex-col items-center gap-8 overflow-y-auto p-8 pt-16',
            className
          )}
        >
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
