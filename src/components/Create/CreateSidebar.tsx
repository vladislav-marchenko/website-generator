import { CreateSidebarBack } from './CreateSidebarBack'
import { CreateSidebarSubCategory } from './CreateSidebarSubCategory'
import { CreateSidebarSubCategoryEditorMenu } from './CreateSidebarSubCategoryEditorMenu'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateSidebar: FC = () => {
  const { selectedTemplate, activeCategoryIndex, activeSubCategory } =
    useContext(TemplateContext) as TemplateContextValues
  const navigate = useNavigate()

  const currentTemplate = templates[selectedTemplate]

  return (
    <div className='flex h-dvh'>
      <aside
        className={cn('relative flex h-full w-full flex-col', {
          'overflow-y-auto': activeSubCategory === null
        })}
      >
        <CreateSidebarBack
          label='Back to templates'
          onClick={() => navigate('/templates')}
        />
        <div className='flex flex-col gap-2 p-4'>
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
        </div>
      </aside>
    </div>
  )
}
