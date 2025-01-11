import { TemplateContext } from '@/contexts/TemplateContext'
import { useSlideshow } from '@/hooks/useSlideshow'
import { cn } from '@/lib/utils'
import type { ImageData, TemplateData } from '@/types'
import type { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

interface ImageProps {
  fieldName: keyof TemplateData
}

export const Image: FC<ImageProps> = ({ fieldName }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const fieldData = data[fieldName] as ImageData

  const slideshowItems = fieldData.slideshowItems.filter(Boolean)
  const currentImageIndex = useSlideshow(
    slideshowItems.length,
    fieldData.slideshowInterval
  )

  return (
    <div
      data-animation={fieldData.animation}
      className='template-element-animations relative'
      style={{
        transform: `rotate(${fieldData.rotation}deg)`,
        opacity: fieldData.opacity / 100
      }}
    >
      {slideshowItems.map((src, index) => (
        <img
          key={src}
          src={src}
          className={cn(
            'absolute left-0 top-0 transition-opacity duration-1000',
            slideshowItems.length > 1 &&
              index !== currentImageIndex &&
              'opacity-0'
          )}
          style={{
            width: `${fieldData.width}px`,
            height:
              fieldData.height === 'auto' ? 'auto' : `${fieldData.height}px`,
            borderColor: fieldData.borderColor,
            borderWidth: `${fieldData.borderWidth}px`
          }}
        />
      ))}
    </div>
  )
}
