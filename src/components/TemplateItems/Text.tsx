import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateData, TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import ContentEditable from 'react-contenteditable'

interface TextProps {
  fieldName: keyof TemplateData
  placeholder: string
  tagName?: string
}

export const Text: FC<TextProps> = ({
  fieldName,
  placeholder,
  tagName = 'span'
}) => {
  const { data, setData } = useContext(TemplateContext) as TemplateContextValues
  const fieldData = data[fieldName] as TextData

  return (
    <div
      data-animation={fieldData.animation}
      className='template-element-animations'
      style={{
        textAlign: fieldData.align,
        transform: `rotate(${fieldData.rotation}deg)`
      }}
    >
      <ContentEditable
        html={fieldData.value || placeholder}
        tagName={tagName}
        onChange={(e) =>
          setData({
            ...data,
            [fieldName]: {
              ...fieldData,
              value: e.currentTarget.innerText
            }
          })
        }
        style={{
          fontFamily: `'${fieldData.fontFamily}'`,
          fontSize: fieldData.fontSizeValue + fieldData.fontSizeUnit,
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
