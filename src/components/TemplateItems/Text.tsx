import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateData } from '@/types'
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

  return (
    <div
      data-animation={data[fieldName].animation}
      className='transition-transform duration-500 data-[animation=bounce]:animate-bounce data-[animation=flash]:animate-flash data-[animation=headShake]:animate-headShake data-[animation=heartBeat]:animate-heartBeat data-[animation=hflip]:animate-hflip data-[animation=jello]:animate-jello data-[animation=ping]:animate-ping data-[animation=pulse]:animate-pulse data-[animation=rubberBand]:animate-rubberBand data-[animation=spin]:animate-spin data-[animation=swing]:animate-swing data-[animation=vflip]:animate-vflip data-[animation=wiggle]:animate-wiggle data-[animation=wobble]:animate-wobble data-[animation=in]:duration-700 data-[animation=in]:animate-in data-[animation=in]:fade-in data-[animation=in]:slide-in-from-bottom'
      style={{
        textAlign: data.projectName.align,
        transform: `rotate(${data.projectName.rotation}deg)`
      }}
    >
      <ContentEditable
        html={data[fieldName].value || placeholder}
        tagName={tagName}
        onChange={(e) =>
          setData({
            ...data,
            projectName: {
              ...data[fieldName],
              value: e.currentTarget.innerText
            }
          })
        }
        style={{
          fontFamily: `'${data.projectName.fontFamily}'`,
          fontSize:
            data[fieldName].fontSizeValue + data[fieldName].fontSizeUnit,
          color: data.projectName.color,
          textDecoration: data.projectName.styles
            .filter((style) => ['underline', 'line-through'].includes(style))
            .join(' '),
          fontStyle: data.projectName.styles.includes('italic') && 'italic',
          fontWeight: data.projectName.styles.includes('bold') && 'bold',
          '-webkit-text-stroke': `${data.projectName.strokeWidth}px ${data.projectName.strokeColor}`,
          backgroundColor: data.projectName.backgroundColor
        }}
      />
    </div>
  )
}
