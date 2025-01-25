import { FontsPicker } from '@/components/FontsPicker/FontsPicker'
import { TemplateContext } from '@/contexts/TemplateContext'
import type { TemplateContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'

export const EditorFontsPicker = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <FontsPicker
      onChange={(value) => updateField(`${data.name}.fontFamily`, value)}
    />
  )
}
