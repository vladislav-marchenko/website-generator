import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorBackground = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  if (!activeSubCategoryData) return

  return (
    <HexColorPicker
      color={activeSubCategoryData.color}
      onChange={(color) => {
        updateCurrentCategoryField('backgroundColor', color)
      }}
    />
  )
}
