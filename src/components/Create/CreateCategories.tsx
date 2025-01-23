import { Logo } from '../Icons'
import { categoriesFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'

export const CreateCategories: FC = () => {
  const { activeCategoryIndex, setActiveCategoryIndex } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div className='flex flex-col items-center gap-4 overflow-y-auto bg-neutral-100 p-2 py-4 dark:bg-neutral-800'>
      <Link to='/' className='mb-6'>
        <Logo />
      </Link>
      {categoriesFields.map(({ label, icon: Icon }, index) => (
        <button
          key={label}
          onClick={() => setActiveCategoryIndex(index)}
          className={cn(
            'max-w-max rounded-md p-2 text-neutral-600 transition-colors duration-200',
            {
              'bg-black text-white dark:bg-white dark:text-black':
                index === activeCategoryIndex,
              'hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700':
                index !== activeCategoryIndex
            }
          )}
        >
          <Icon width={22} height={22} />
        </button>
      ))}
    </div>
  )
}
