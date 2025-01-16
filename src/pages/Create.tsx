import { CreateSidebar } from '@/components/Create/CreateSidebar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { templates } from '@/templates'
import { Navigate, useParams } from 'react-router-dom'

export const Create = () => {
  const { template } = useParams()

  if (!templates.hasOwnProperty(template ?? '')) {
    return <Navigate to='/templates' />
  }

  const Template = templates[template as string].element

  return (
    <ResizablePanelGroup direction='horizontal' className='flex max-h-dvh'>
      <ResizablePanel defaultSize={20} minSize={15} maxSize={80}>
        <CreateSidebar />
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
