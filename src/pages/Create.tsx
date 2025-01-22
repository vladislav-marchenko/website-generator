import { CreateCategories } from '@/components/Create/CreateCategories'
import { CreateSidebar } from '@/components/Create/CreateSidebar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Create = () => {
  const { selectedTemplate, data, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const Template = templates[selectedTemplate].element

  return (
    <ResizablePanelGroup direction='horizontal' className='flex max-h-dvh'>
      <CreateCategories />
      <ResizablePanel
        defaultSize={20}
        minSize={5}
        maxSize={80}
        className='min-w-52'
      >
        <CreateSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <main className='h-full flex-auto text-white'>
          <Template data={data} updateField={updateField} />
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
