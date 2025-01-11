import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorStroke = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <>
      <HexColorPicker
        color={data.strokeColor}
        onChange={(color) => {
          updateCurrentCategoryField('strokeColor', color)
        }}
      />
      <div className='flex items-center gap-4'>
        <Label>Width:</Label>
        <Slider
          defaultValue={[data.strokeWidth]}
          min={0.2}
          max={20}
          step={0.1}
          onValueChange={(value) =>
            updateCurrentCategoryField('strokeWidth', value[0])
          }
        />
      </div>
    </>
  )
}
