import { useTemplateData } from '@/hooks/useTemplateData'
import { templates } from '@/templates'
import { TemplateName } from '@/types/templates'
import { Navigate } from 'react-router-dom'

export const Website = () => {
  const { data, templateName } = useTemplateData()

  if (!templateName || !data) {
    return <Navigate to='/' />
  }

  const TemplateElement = templates[templateName as TemplateName].element
  return <TemplateElement />
}
