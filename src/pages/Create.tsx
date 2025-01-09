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
  const { selectedTemplate: selectedTemplateName } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const Template = templates[selectedTemplateName].element

  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='flex h-full min-h-screen'
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={80}>
        <CreateSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <main className='h-full flex-auto bg-neutral-600 text-white'>
          <Template />
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
