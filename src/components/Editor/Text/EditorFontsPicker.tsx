import { FontsPicker } from '@/components/FontsPicker'
import { TemplateContext } from '@/contexts/TemplateContext'
import type { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorFontsPicker = () => {
  const { updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <FontsPicker
      onChange={(value) => updateCurrentCategoryField('fontFamily', value)}
    />
  )
}
