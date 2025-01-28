import { BuilderSidebarSubCategoryMenu } from './BuilderSidebarSubCategoryMenu'
import { TemplateSubCategoryField } from '@/types/templates'
import { MoveRight } from 'lucide-react'
import { FC, useState } from 'react'

interface BuilderSidebarSubCategoryProps {
  label: string
  fields: TemplateSubCategoryField[]
}

export const BuilderSidebarSubCategory: FC<BuilderSidebarSubCategoryProps> = ({
  label,
  fields
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsActive(true)}
        className='flex w-full items-center justify-between gap-2 rounded-md p-3 text-start transition-colors duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
      >
        <span className='font-arial-black'>{label}</span>
        <MoveRight size={16} />
      </button>
      <BuilderSidebarSubCategoryMenu
        isActive={isActive}
        setIsActive={setIsActive}
        fields={fields}
        label={label}
      />
    </>
  )
}
