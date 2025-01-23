import { CreateSidebarHeader } from './CreateSidebarHeader'
import { categoriesFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateSidebar: FC = () => {
  const { activeCategory, activeSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues
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
