import { CreateButton } from '../Create/CreateButton'
import { CreateSidebarSubCategory } from '../Create/CreateSidebarSubCategory'
import { CreateSidebarSubCategoryEditorMenu } from '../Create/CreateSidebarSubCategoryEditorMenu'
import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Editor = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const currentTemplate = templates[selectedTemplate]

  return (
    <div className='flex flex-auto flex-col justify-between gap-4 p-4'>
      <div className='flex flex-col gap-2'>
        {currentTemplate.categories.map(({ label, fields }) => (
          <CreateSidebarSubCategory key={label} label={label} fields={fields} />
        ))}
      </div>
      <CreateButton />
      <CreateSidebarSubCategoryEditorMenu />
    </div>
  )
}
