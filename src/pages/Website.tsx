import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { TemplateName } from '@/types/templates'
import { useContext } from 'react'

export const Website = () => {
  const { data, selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { protocol, host } = window.location
  const homeURL = `${protocol}//${host.split('.').slice(1).join('.')}`

  console.log(data, selectedTemplate)

  // if (!selectedTemplate || !data) window.location.href = homeURL

  const TemplateElement = templates[selectedTemplate as TemplateName].element
  return <TemplateElement />
}
