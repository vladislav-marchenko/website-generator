import { templates } from '.'
import { FC } from 'react'

const defaultDataValues = {
  projectName:
    'Отредактируй Project name или background url, чтобы увидеть изменения на шаблоне',
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVxGVNUPYD6GUrOmszlQ9orAi_ms3yP-dTeX6c6SKOcf86mbJdYyCCyuLSUkQWAO1eHE&usqp=CAU'
}

export const Classic: FC<typeof templates.classic.dataFields> = ({
  projectName,
  background
}) => {
  return (
    <div
      className='relative h-full'
      style={{
        background: `url(${background || defaultDataValues.background}) no-repeat center/cover`
      }}
    >
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
        <h1 className='text-center text-4xl font-bold'>
          {projectName || defaultDataValues.projectName}
        </h1>
      </div>
    </div>
  )
}
