import { CreateSidebarSubCategoryMenu } from './CreateSidebarSubCategoryMenu'
import { TemplateSubCategoryField } from '@/types/templates'
import { FC, useState } from 'react'

interface CreateSidebarSubCategoryProps {
  label: string
  fields: TemplateSubCategoryField[]
}

export const CreateSidebarSubCategory: FC<CreateSidebarSubCategoryProps> = ({
  label,
  fields
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsActive(true)}
        className='w-full rounded-md p-3 text-start transition-colors duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
      >
        {label}
      </button>
      <CreateSidebarSubCategoryMenu
        isActive={isActive}
        setIsActive={setIsActive}
        fields={fields}
        label={label}
      />
    </>
  )
}
