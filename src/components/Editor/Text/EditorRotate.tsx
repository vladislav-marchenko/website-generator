import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorRotate = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  if (!activeSubCategoryData) return

  return (
    <div className='flex items-center gap-2'>
      <Input
        type='number'
        min={0}
        max={360}
        value={activeSubCategoryData.rotation}
        onChange={(e) => updateCurrentCategoryField('rotation', e.target.value)}
      />
      <span>deg</span>
    </div>
  )
}
