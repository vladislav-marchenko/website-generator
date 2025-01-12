import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { LinkData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as LinkData
  if (!data) return

  return (
    <Input
      value={data.url}
      onChange={(e) => updateCurrentCategoryField('url', e.target.value)}
    />
  )
}
