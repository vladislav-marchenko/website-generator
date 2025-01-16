import { templates } from '@/templates'

export const Website = () => {
  const TemplateElement = templates['classic'].element
  const data = JSON.parse(localStorage.getItem('template') ?? '')

  return <TemplateElement data={data} />
}
