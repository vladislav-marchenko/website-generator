import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <Input
      value={data.src}
      onChange={(e) => updateField(`${data.name}.src`, e.target.value)}
      placeholder={data?.placeholder}
    />
  )
}
