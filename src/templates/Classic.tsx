import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import ContentEditable from 'react-contenteditable'

const defaultDataValues = {
  projectName: {
    value:
      'Отредактируй Project name или background url, чтобы увидеть изменения на шаблоне',
    fontFamily: 'Inter',
    fontSize: {
      value: 40,
      unit: 'px'
    }
  },
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVxGVNUPYD6GUrOmszlQ9orAi_ms3yP-dTeX6c6SKOcf86mbJdYyCCyuLSUkQWAO1eHE&usqp=CAU'
}

export const Classic: FC = () => {
  const { data, setData } = useContext(TemplateContext) as TemplateContextValues
  console.log(data)

  const fontSize = data.projectName.fontSize.value
  const fontSizeUnit = data.projectName.fontSize.unit

  return (
    <div
      className='relative h-full'
      style={{
        background: `url(${data.background || defaultDataValues.background}) no-repeat center/cover`,
        fontFamily: `'${data.projectName.fontFamily}'`,
        fontSize: fontSize + fontSizeUnit,
        color: data.projectName.color
      }}
    >
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
        <ContentEditable
          className='text-center font-bold'
          html={data.projectName.value || defaultDataValues.projectName.value}
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
        />
      </div>
    </div>
  )
}
