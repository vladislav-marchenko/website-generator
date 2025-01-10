import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import ContentEditable from 'react-contenteditable'

const placeholders = {
  projectName:
    'Отредактируй Project name или background url, чтобы увидеть изменения на шаблоне',
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVxGVNUPYD6GUrOmszlQ9orAi_ms3yP-dTeX6c6SKOcf86mbJdYyCCyuLSUkQWAO1eHE&usqp=CAU'
}

export const Classic: FC = () => {
  const { data, setData } = useContext(TemplateContext) as TemplateContextValues

  const fontSize = data.projectName.fontSize.value
  const fontSizeUnit = data.projectName.fontSize.unit

  return (
    <div
      className='relative h-full'
      style={{
        background: `url(${data.background || placeholders.background}) no-repeat center/cover`
      }}
    >
      <div
        data-animation={data.projectName.animation}
        className='group absolute left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md'
      >
        <ContentEditable
          html={data.projectName.value || placeholders.projectName}
          tagName='h1'
          onChange={(e) =>
            setData({
              ...data,
              projectName: {
                ...data.projectName,
                value: e.currentTarget.innerText
              }
            })
          }
          className='transition-all duration-500 group-data-[animation=bounce]:animate-bounce group-data-[animation=ping]:animate-ping group-data-[animation=pulse]:animate-pulse group-data-[animation=spin]:animate-spin group-data-[animation=in]:duration-700 group-data-[animation=in]:animate-in group-data-[animation=in]:fade-in group-data-[animation=in]:slide-in-from-bottom'
          style={{
            fontFamily: `'${data.projectName.fontFamily}'`,
            fontSize: fontSize + fontSizeUnit,
            color: data.projectName.color,
            textAlign: data.projectName.align,
            textDecoration: data.projectName.styles
              .filter((style) => ['underline', 'line-through'].includes(style))
              .join(' '),
            fontStyle: data.projectName.styles.includes('italic') && 'italic',
            fontWeight: data.projectName.styles.includes('bold') && 'bold',
            '-webkit-text-stroke': `${data.projectName.strokeWidth}px ${data.projectName.strokeColor}`,
            backgroundColor: data.projectName.backgroundColor,
            transform: `rotate(${data.projectName.rotation}deg)`
          }}
        />
      </div>
    </div>
  )
}
