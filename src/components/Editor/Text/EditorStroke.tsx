import { Slider } from '@/components/ui/slider'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorStroke = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  if (!activeSubCategoryData) return

  return (
    <>
      <HexColorPicker
        color={activeSubCategoryData.color}
        onChange={(color) => {
          updateCurrentCategoryField('strokeColor', color)
        }}
      />
      <div className='flex items-center gap-4'>
        <span>Width:</span>
        <Slider
          defaultValue={[activeSubCategoryData.strokeWidth]}
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
