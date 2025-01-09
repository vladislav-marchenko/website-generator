import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const CreateSidebarCategories: FC = () => {
  const { selectedTemplate, activeCategoryIndex, setActiveCategoryIndex } =
    useContext(TemplateContext) as TemplateContextValues

  return (
    <div className='flex flex-col gap-4 bg-neutral-100 p-4 dark:bg-neutral-800'>
      {templates[selectedTemplate].categories.map(
        ({ name, icon: Icon }, index) => (
          <button
            key={name}
            onClick={() => setActiveCategoryIndex(index)}
            className={cn(
              'rounded-md p-2 text-neutral-600 transition-colors duration-200',
              {
                'bg-neutral-600 text-white dark:bg-neutral-700':
                  index === activeCategoryIndex,
                'hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700/30':
                  index !== activeCategoryIndex
              }
            )}
          >
            <Icon size={24} />
          </button>
        )
      )}
    </div>
  )
}
