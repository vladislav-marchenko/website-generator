import { Loading } from '@/components/Loading'
import { useTemplateData } from '@/hooks/useTemplateData'
import { templates } from '@/templates'
import { TemplateName } from '@/types/templates'

export const Website = () => {
  const { data, templateName, isLoading } = useTemplateData()
  const { protocol, host } = window.location
  const homeURL = `${protocol}//${host.split('.').slice(1).join('.')}`

  if (isLoading) {
    return (
      <div className='flex h-dvh w-full items-center justify-center'>
        <Loading size={48} />
      </div>
    )
  }

  if (!templateName || !data) window.location.href = homeURL

  const TemplateElement = templates[templateName as TemplateName].element
  return <TemplateElement />
}
