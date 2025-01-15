import { TemplateContext } from '@/contexts/TemplateContext'
import { LinkData, TemplateData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

interface LinkProps {
  fieldName: keyof TemplateData
}

export const Link: FC<LinkProps> = ({ fieldName }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const fieldData = data[fieldName] as LinkData

  const Icon = fieldData.icon

  return (
    <a
      href={fieldData.url}
      target='_blank'
      data-animation={fieldData.animation}
      className='template-element-animations relative'
      style={{ transform: `rotate(${fieldData.rotation}deg)` }}
    >
      <Icon size={fieldData.size} />
    </a>
  )
}
