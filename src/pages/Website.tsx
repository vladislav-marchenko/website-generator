import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates/data'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Website = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { protocol, host } = window.location
  const homeURL = `${protocol}//${host.split('.').slice(1).join('.')}`

  // if (!selectedTemplate || !data) window.location.href = homeURL

  const TemplateElement = templates[selectedTemplate].element
  return <TemplateElement />
}
