import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <Input
      value={data.src}
      onChange={(e) => updateCurrentCategoryField('src', e.target.value)}
    />
  )
}
