import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import ContentEditable from 'react-contenteditable'
import webFontLoader from 'webfontloader'

const defaultDataValues = {
  projectName:
    'Отредактируй Project name или background url, чтобы увидеть изменения на шаблоне',
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVxGVNUPYD6GUrOmszlQ9orAi_ms3yP-dTeX6c6SKOcf86mbJdYyCCyuLSUkQWAO1eHE&usqp=CAU'
}

// const fonts = ['Barlow', 'Roboto', 'Montserrat', 'Arial', 'Times New Roman']

export const Classic: FC = () => {
  const { data, setData } = useContext(TemplateContext) as TemplateContextValues
  /*
  webFontLoader.load({
    google: {
      families: fonts
    }
  })
  */

  // console.log(import.meta.env.VITE_GOOGLE_API_KEY)

  return (
    <div
      className='relative h-full'
      style={{
        background: `url(${data.background || defaultDataValues.background}) no-repeat center/cover`
      }}
    >
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
        <ContentEditable
          className='text-center text-4xl font-bold'
          html={data.projectName || defaultDataValues.projectName}
          tagName='h1'
          onChange={(e) =>
            setData({ ...data, projectName: e.currentTarget.innerText })
          }
        />
      </div>
    </div>
  )
}
