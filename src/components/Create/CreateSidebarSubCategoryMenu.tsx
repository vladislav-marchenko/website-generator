import { Button } from '../Button'
import { CreateSidebarHeader } from './CreateSidebarHeader'
import { CreateSidebarSubCategoryItem } from './CreateSidebarSubCategoryItem'
import { TemplateSubCategoryField } from '@/types/templates'
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
import { Dispatch, FC, SetStateAction } from 'react'

interface CreateSidebarSubCategoryMenuProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  fields: TemplateSubCategoryField[]
  label: string
}

export const CreateSidebarSubCategoryMenu: FC<
  CreateSidebarSubCategoryMenuProps
> = ({ isActive, setIsActive, fields, label }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.2 }}
          className='absolute inset-0 z-10 flex flex-col overflow-y-auto bg-white dark:bg-neutral-900'
        >
          <CreateSidebarHeader
            title={label}
            onClick={() => setIsActive(false)}
          />
          <div className='flex flex-auto flex-col justify-between gap-4 p-4'>
            <div className='flex flex-auto flex-col gap-4 p-1 pl-4'>
              {fields.map((field) => (
                <CreateSidebarSubCategoryItem key={field.name} {...field} />
              ))}
            </div>
            <Button>Pay</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
