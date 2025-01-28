import { categoriesFields } from '@/consts'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { cn } from '@/lib/utils'
import { CategoryName } from '@/types'
import { TemplateEditorContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { useLocation } from 'react-router-dom'

export const BuilderCategoriesItem: FC<{ categoryName: CategoryName }> = ({
  categoryName
}) => {
  const { activeCategory, setActiveCategory } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues
  const { icon: Icon, creatorOnly = false } = categoriesFields[categoryName]
  const { pathname } = useLocation()

  if (creatorOnly && pathname !== '/create') return

  return (
    <button
      onClick={() => setActiveCategory(categoryName as CategoryName)}
      className={cn(
        'max-w-max rounded-md p-2 text-neutral-600 transition-colors duration-200',
        {
          'bg-black text-white dark:bg-white dark:text-black':
            categoryName === activeCategory,
          'hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700':
            categoryName !== activeCategory
        }
      )}
    >
      <Icon width={22} height={22} />
    </button>
  )
}
