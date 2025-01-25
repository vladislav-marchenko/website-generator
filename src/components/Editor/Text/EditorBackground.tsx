import { Button } from '@/components/ui/button'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorBackground = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <>
      <HexColorPicker
        color={data.backgroundColor}
        onChange={(color) => {
          updateField(`${data.name}.backgroundColor`, color)
        }}
      />
      <Button
        className='max-w-max'
        onClick={() =>
          updateField(`${data.name}.backgroundColor`, 'transparent')
        }
      >
        Remove
      </Button>
    </>
  )
}
