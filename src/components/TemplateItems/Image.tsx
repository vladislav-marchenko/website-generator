import ImagePlaceholder from '@/assets/placeholder.jpg'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useSlideshow } from '@/hooks/useSlideshow'
import { cn } from '@/lib/utils'
import type { ImageData, TemplateData } from '@/types'
import type { TemplateContextValues } from '@/types/contexts'
import { motion, AnimatePresence } from 'motion/react'
import { FC, useContext } from 'react'

interface ImageProps {
  fieldName: keyof TemplateData
  className?: {
    wrapper?: string
    image?: string
  }
}

export const Image: FC<ImageProps> = ({ fieldName, className }) => {
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
      className={cn(
        'template-element-animations relative max-w-full',
        className?.wrapper
      )}
      style={{
        transform: `rotate(${fieldData.rotation}deg)`,
        opacity: fieldData.opacity / 100,
        minWidth: `${fieldData.width}px`,
        minHeight: `${fieldData.height}px`,
        animationDuration: `${fieldData.animationDuration}ms`
      }}
    >
      {/*

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

      */}
      <AnimatePresence mode='popLayout'>
        <motion.img
          key={currentImageIndex}
          src={items[currentImageIndex] || ImagePlaceholder}
          onError={(e) => console.log(e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={className?.image}
          style={{
            borderColor: fieldData.borderColor,
            borderWidth: `${fieldData.borderWidth}px`,
            width: `${fieldData.width}${fieldData.sizeUnit}`,
            height:
              fieldData.height === 'auto'
                ? fieldData.height
                : `${fieldData.height}${fieldData.sizeUnit}`
          }}
        />
      </AnimatePresence>
    </div>
  )
}
