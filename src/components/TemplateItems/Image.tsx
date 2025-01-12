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

  const uploadedImageURL =
    fieldData.uploaded && URL.createObjectURL(fieldData.uploaded)

  const items = [
    fieldData.src,
    uploadedImageURL,
    ...fieldData.slideshowItems
  ].filter(Boolean)

  const currentImageIndex = useSlideshow(
    items.length,
    fieldData.slideshowInterval
  )

  return (
    <div
      data-animation={fieldData.animation}
      className='template-element-animations relative'
      style={{
        transform: `rotate(${fieldData.rotation}deg)`,
        opacity: fieldData.opacity / 100,
        minWidth: `${fieldData.width}px`,
        minHeight: `${fieldData.height}px`
      }}
    >
      {items.map((src, index) => (
        <img
          key={src}
          src={src}
          className={cn(
            'absolute left-0 top-0 w-full transition-opacity duration-1000',
            items.length > 1 && index !== currentImageIndex && 'opacity-0'
          )}
          style={{
            borderColor: fieldData.borderColor,
            borderWidth: `${fieldData.borderWidth}px`,
            width: `${fieldData.width}px`,
            height:
              fieldData.height === 'auto' ? 'auto' : `${fieldData.height}px`
          }}
        />
      ))}
    </div>
  )
}
