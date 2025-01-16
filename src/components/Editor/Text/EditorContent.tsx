import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorContent = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <Input
      value={data.value}
      onChange={(e) => updateField(`${data.name}.value`, e.target.value)}
    />
  )
}
