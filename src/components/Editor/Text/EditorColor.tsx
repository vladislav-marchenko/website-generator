import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorColor = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <HexColorPicker
      color={data.color}
      onChange={(color) => updateField(`${data.name}.color`, color)}
    />
  )
}
