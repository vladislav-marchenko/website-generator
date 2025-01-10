import { Label } from '../ui/label'
import { Button } from '@/components/ui/button'
import { editorFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import type { TemplateContextValues } from '@/types/contexts'
import { ChevronLeft } from 'lucide-react'
import { FC, useContext } from 'react'

export const CreateSidebarSubCategoryEditorMenu: FC = () => {
  const { activeSubCategory, setActiveSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 right-0 top-0 overflow-y-auto bg-neutral-900 p-4 transition-transform duration-300',
        {
          'translate-x-full': !activeSubCategory
        }
      )}
    >
      <Button onClick={() => setActiveSubCategory(null)} variant='ghost'>
        <ChevronLeft />
        <span>Back</span>
      </Button>

      {activeSubCategory && (
        <div className='flex flex-col gap-8 py-4'>
          {editorFields.text.map(({ label, element: Element }) => (
            <div className='flex flex-col gap-2'>
              <Label>{label}</Label>
              <Element />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
