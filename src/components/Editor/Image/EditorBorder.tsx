import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorBorder = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <>
      <HexColorPicker
        color={data.borderColor}
        onChange={(color) => {
          updateCurrentCategoryField('borderColor', color)
        }}
      />
      <div className='flex items-center gap-4'>
        <Label>Width</Label>
        <Slider
          value={[data.borderWidth]}
          onValueChange={(value) =>
            updateCurrentCategoryField('borderWidth', value[0])
          }
        />
      </div>
    </>
  )
}
