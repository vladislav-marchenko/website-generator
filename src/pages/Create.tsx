import { CreateSidebar } from '@/components/Create/CreateSidebar'
import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Create = () => {
  const { selectedTemplate: selectedTemplateName, data } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const Template = templates[selectedTemplateName].element

  return (
    <div className='flex h-full min-h-screen'>
      <CreateSidebar />
      <main className='flex-auto bg-neutral-600'>
        <Template {...data} />
      </main>
    </div>
  )
}
