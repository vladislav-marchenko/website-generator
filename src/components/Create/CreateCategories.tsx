import { Logo } from '../Icons'
import { CreateCategoriesItem } from './CreateCategoriesItem'
import { categoriesFields } from '@/consts'
import { CategoryName } from '@/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const CreateCategories: FC = () => {
  return (
    <div className='flex flex-col items-center gap-4 overflow-y-auto bg-neutral-100 p-2 py-4 dark:bg-neutral-800'>
      <Link to='/' className='mb-6'>
        <Logo />
      </Link>
      {Object.keys(categoriesFields).map((categoryName) => (
        <CreateCategoriesItem
          key={categoryName}
          categoryName={categoryName as CategoryName}
        />
      ))}
    </div>
  )
}
