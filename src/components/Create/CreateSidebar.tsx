import { CreateSidebarHeader } from './CreateSidebarHeader'
import { categoriesFields } from '@/consts'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { cn } from '@/lib/utils'
import { TemplateEditorContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateSidebar: FC = () => {
  const { activeCategory, activeSubCategory } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues
  const navigate = useNavigate()

  const CurrentCategoryElement = categoriesFields[activeCategory].element

  return (
    <div className='flex h-dvh'>
      <aside
        className={cn('relative flex h-full w-full flex-col', {
          'overflow-y-auto': activeSubCategory === null
        })}
      >
        <CreateSidebarHeader
          buttonLabel='Back to templates'
          onClick={() => navigate('/templates')}
        />
        <CurrentCategoryElement />
      </aside>
    </div>
  )
}
