import { Button } from '@/components/ui/button'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorBackground = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <>
      <HexColorPicker
        color={data.backgroundColor}
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
