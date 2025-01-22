import { Label } from '../ui/label'
import { CreateSidebarBack } from './CreateSidebarBack'
import { editorFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import type { TemplateContextValues } from '@/types/contexts'
import { TemplateSubCategoryField } from '@/types/templates'
import { AnimatePresence, motion } from 'motion/react'
import { FC, useContext } from 'react'

const getFields = (activeSubCategory: TemplateSubCategoryField | null) => {
  if (!activeSubCategory) return null
  const type = activeSubCategory.type

  if (editorFields.hasOwnProperty(type)) {
    return editorFields[type as keyof typeof editorFields]
  }

  return null
}

export const CreateSidebarSubCategoryEditorMenu: FC = () => {
  const { activeSubCategory, setActiveSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const fields = getFields(activeSubCategory)

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
            {fields?.map(({ label, element: Element }) => (
              <div key={label} className='flex flex-col gap-2'>
                <Label>{label}</Label>
                <Element />
              </div>
            ))}

            {!fields && (
              <span>
                It seems like there's no editor for this type of component
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
