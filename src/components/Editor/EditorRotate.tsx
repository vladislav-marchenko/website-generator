import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData, LinkData, TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorRotate = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData | ImageData | LinkData
  if (!data) return

  return (
    <div className='flex items-center gap-2'>
      <Input
        type='number'
        min={0}
        max={360}
        value={data.rotation}
        onChange={(e) => updateField(`${data.name}.rotation`, e.target.value)}
      />
      <span>deg</span>
    </div>
  )
}
