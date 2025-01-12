import { CreateSidebarCategories } from './CreateSidebarCategories'
import { CreateSidebarSubCategory } from './CreateSidebarSubCategory'
import { CreateSidebarSubCategoryEditorMenu } from './CreateSidebarSubCategoryEditorMenu'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

const currentTemplate = templates.classic

export const CreateSidebar: FC = () => {
  const { activeCategoryIndex, activeSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div className='flex h-dvh'>
      <CreateSidebarCategories />
      <aside
        className={cn('relative flex h-full w-full flex-col gap-4 p-4', {
          'overflow-y-auto': activeSubCategory === null
        })}
      >
        {currentTemplate.categories[activeCategoryIndex].subCategories.map(
          ({ label, fields }) => (
            <CreateSidebarSubCategory
              key={label}
              label={label}
              fields={fields}
            />
          )
        )}
        <CreateSidebarSubCategoryEditorMenu />
      </aside>
    </div>
  )
}
