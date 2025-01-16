import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { TemplateData, TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import ContentEditable from 'react-contenteditable'

interface TextProps {
  fieldName: keyof TemplateData
  placeholder?: string
  as?: string
  className?: {
    wrapper?: string
    text?: string
  }
}

export const Text: FC<TextProps> = ({
  fieldName,
  placeholder = '',
  as = 'span',
  className
}) => {
  const { data, setData } = useContext(TemplateContext) as TemplateContextValues
  const fieldData = data[fieldName] as TextData
  console.log(fieldData)

  return (
    <div
      data-animation={fieldData.animation}
      className={cn(
        'template-element-animations max-w-max',
        className?.wrapper
      )}
      style={{
        textAlign: fieldData.align,
        transform: `rotate(${fieldData.rotation}deg)`,
        animationDuration: `${fieldData.animationDuration}ms`
      }}
    >
      <ContentEditable
        html={fieldData.value || placeholder}
        tagName={as}
        onChange={(e) =>
          setData({
            ...data,
            [fieldName]: {
              ...fieldData,
              value: e.currentTarget.innerText
            }
          })
        }
        className={className?.text}
        style={{
          fontFamily: `'${fieldData.fontFamily}'`,
          fontSize: fieldData.fontSizeValue + fieldData.sizeUnit,
          color: fieldData.color,
          textDecoration: fieldData.styles
            .filter((style) => ['underline', 'line-through'].includes(style))
            .join(' '),
          fontStyle: fieldData.styles.includes('italic') && 'italic',
          fontWeight: fieldData.styles.includes('bold') && 'bold',
          WebkitTextStroke: `${fieldData.strokeWidth}px ${fieldData.strokeColor}`,
          backgroundColor: fieldData.backgroundColor
        }}
      />
    </div>
  )
}
