import { TemplateItemError } from './Error'
import { socialLinkIcons } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { LinkData, TemplateData } from '@/types/templates'
import { FC, useContext } from 'react'

const getIcon = (name: string) => {
  if (socialLinkIcons.hasOwnProperty(name)) {
    return socialLinkIcons[name as keyof typeof socialLinkIcons]
  }

  return socialLinkIcons.default
}

export const Link: FC<{ fieldName: keyof TemplateData }> = ({ fieldName }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return <TemplateItemError />

  const fieldData = data.links[fieldName] as LinkData
  const Icon = getIcon(fieldData.iconName)

  return (
    <a
      href={fieldData.url}
      target='_blank'
      data-animation={fieldData.animation}
      className='template-element-animations relative'
      style={{
        transform: `rotate(${fieldData.rotation}deg)`,
        animationDuration: `${fieldData.animationDuration}ms`
      }}
    >
      <Icon size={fieldData.size} />
    </a>
  )
}
