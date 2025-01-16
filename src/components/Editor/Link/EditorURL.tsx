import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { LinkData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, activeSubCategory, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as LinkData
  if (!data) return

  return (
    <Input
      value={data.url}
      onChange={(e) =>
        updateField(`links.${activeSubCategory?.name}.url`, e.target.value)
      }
    />
  )
}
