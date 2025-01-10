import { Button } from '@/components/ui/button'
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
    <>
      <HexColorPicker
        color={activeSubCategoryData.backgroundColor}
        onChange={(color) => {
          updateCurrentCategoryField('backgroundColor', color)
        }}
      />
      <Button
        className='max-w-max'
        onClick={() =>
          updateCurrentCategoryField('backgroundColor', 'transparent')
        }
      >
        Remove
      </Button>
    </>
  )
}
