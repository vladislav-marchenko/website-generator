import { CreateSidebar } from '@/components/Create/CreateSidebar'
import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Create = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const TemplateElement = templates[selectedTemplate].element

  return (
    <div className='flex h-full'>
      <CreateSidebar />
      <main className='flex-auto'>
        <TemplateElement />
      </main>
    </div>
  )
}
