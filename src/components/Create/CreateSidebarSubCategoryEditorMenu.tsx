import { Label } from '../ui/label'
import { CreateSidebarBack } from './CreateSidebarBack'
import { editorFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import type { TemplateContextValues } from '@/types/contexts'
import { AnimatePresence, motion } from 'motion/react'
import { FC, useContext } from 'react'

export const CreateSidebarSubCategoryEditorMenu: FC = () => {
  const { activeSubCategory, setActiveSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <AnimatePresence>
      {activeSubCategory && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className='absolute inset-0 z-10 overflow-y-auto bg-neutral-900'
        >
          <CreateSidebarBack onClick={() => setActiveSubCategory(null)} />

          <div className='flex flex-col gap-8 p-4'>
            {editorFields[activeSubCategory.type]?.map(
              ({ label, element: Element }) => (
                <div key={label} className='flex flex-col gap-2'>
                  <Label>{label}</Label>
                  <Element />
                </div>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
