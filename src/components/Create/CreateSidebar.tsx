import { CreateSidebarCategories } from './CreateSidebarCategories'
import { CreateSidebarSubCategory } from './CreateSidebarSubCategory'
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
    <div className='flex'>
      <CreateSidebarCategories />
      <aside className='flex w-full min-w-80 flex-col gap-4 p-4'>
        {currentTemplate.categories[activeCategoryIndex].subCategories.map(
          ({ label, fields }) => (
            <CreateSidebarSubCategory label={label} fields={fields} />
          )
        )}
      </aside>
    </div>
  )
}
