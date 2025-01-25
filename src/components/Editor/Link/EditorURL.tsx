import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { LinkData } from '@/types/templates'
import { useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as LinkData
  if (!data) return

  return (
    <Input
      value={data.url}
      onChange={(e) => updateField(`links.${data.name}.url`, e.target.value)}
    />
  )
}
