import { TemplateItemError } from './Error'
import { socialLinkIcons } from '@/consts'
import { LinkData, TemplateData } from '@/types/templates'
import { FC } from 'react'

const getIcon = (name: string) => {
  if (socialLinkIcons.hasOwnProperty(name)) {
    return socialLinkIcons[name as keyof typeof socialLinkIcons]
  }

  return socialLinkIcons.default
}

interface LinkProps {
  data: TemplateData
  fieldName: keyof TemplateData
}

export const Link: FC<LinkProps> = ({ data, fieldName }) => {
  const fieldData = data.links[fieldName] as LinkData
  if (!fieldData) return <TemplateItemError />

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
