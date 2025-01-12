import { CreateSidebarCategories } from './CreateSidebarCategories'
import { CreateSidebarSubCategory } from './CreateSidebarSubCategory'
import { CreateSidebarSubCategoryEditorMenu } from './CreateSidebarSubCategoryEditorMenu'
import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

const currentTemplate = templates.classic

export const CreateSidebar: FC = () => {
  const { activeCategoryIndex } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div className='flex h-dvh'>
      <CreateSidebarCategories />
      <aside className='relative flex h-full w-full flex-col gap-4 overflow-y-auto p-4'>
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
