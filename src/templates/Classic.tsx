import { Image } from '@/components/TemplateItems/Image'
import { Link } from '@/components/TemplateItems/Link'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

const placeholders = {
  projectName:
    'Отредактируй Project name или background url, чтобы увидеть изменения на шаблоне',
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVxGVNUPYD6GUrOmszlQ9orAi_ms3yP-dTeX6c6SKOcf86mbJdYyCCyuLSUkQWAO1eHE&usqp=CAU'
}

export const Classic: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues

  return (
    <div
      className='relative h-full overflow-y-auto'
      style={{
        background: `url(${data.background || placeholders.background}) no-repeat center/cover`
      }}
    >
      <div className='group absolute left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
        <div className='flex flex-col items-center'>
          <Text
            fieldName='projectName'
            placeholder={placeholders.projectName}
          />
          <Image fieldName='logo' />
          <Link fieldName='tiktok' />
        </div>
      </div>
    </div>
  )
}
