import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorContent = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  if (!activeSubCategoryData) return

  return (
    <Input
      value={activeSubCategoryData.value}
      onChange={(e) => updateCurrentCategoryField('value', e.target.value)}
    />
  )
}
