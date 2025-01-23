import { categoriesFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { CategoryName } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const CreateCategoriesItem: FC<{ categoryName: CategoryName }> = ({
  categoryName
}) => {
  const { activeCategory, setActiveCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { icon: Icon } = categoriesFields[categoryName]

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
