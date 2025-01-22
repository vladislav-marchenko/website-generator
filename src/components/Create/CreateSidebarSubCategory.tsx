import { Button } from '../ui/button'
import { CreateSidebarBack } from './CreateSidebarBack'
import { CreateSidebarSubCategoryItem } from './CreateSidebarSubCategoryItem'
import { CreateSidebarSubCategoryMenu } from './CreateSidebarSubCategoryMenu'
import { TemplateSubCategoryField } from '@/types/templates'
import { MoveLeft } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
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
      />
    </>
  )
}
