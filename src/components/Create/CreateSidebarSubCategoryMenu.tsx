import { CreateSidebarBack } from './CreateSidebarBack'
import { CreateSidebarSubCategoryItem } from './CreateSidebarSubCategoryItem'
import { TemplateSubCategoryField } from '@/types/templates'
import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
import { Dispatch, FC, SetStateAction } from 'react'

interface CreateSidebarSubCategoryMenuProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  fields: TemplateSubCategoryField[]
}

export const CreateSidebarSubCategoryMenu: FC<
  CreateSidebarSubCategoryMenuProps
> = ({ isActive, setIsActive, fields }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className='absolute inset-0 z-10 overflow-y-auto bg-neutral-900'
        >
          <CreateSidebarBack onClick={() => setIsActive(false)} />
          <div className='p-4'>
            <div className='flex flex-col gap-4 p-1 pl-4'>
              {fields.map((field) => (
                <CreateSidebarSubCategoryItem key={field.name} {...field} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
