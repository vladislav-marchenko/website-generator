import { BuilderCategories } from '@/components/Builder/BuilderCategories'
import { BuilderSidebar } from '@/components/Builder/BuilderSidebar'
import { Loading } from '@/components/Loading'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useTemplateData } from '@/hooks/useTemplateData'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Builder = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { isLoading } = useTemplateData()

  if (isLoading) {
    return (
      <div className='flex h-dvh w-full items-center justify-center'>
        <Loading size={48} className='dark:fill-neutral-200' />
      </div>
    )
  }

  if (!selectedTemplate) return
  const Template = templates[selectedTemplate].element

  return (
    <ResizablePanelGroup direction='horizontal' className='flex max-h-dvh'>
      <BuilderCategories />
      <ResizablePanel
        defaultSize={20}
        minSize={5}
        maxSize={80}
        className='min-w-52'
      >
        <BuilderSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <main className='h-full flex-auto text-white'>
          <Template />
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
