import { SizeUnitSelect } from '../SizeUnitSelect'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorSize = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <div className='flex flex-col gap-2'>
      <Slider
        className='my-2'
        value={[data.width]}
        onValueChange={(value) => {
          updateCurrentCategoryField('width', value[0])
          updateCurrentCategoryField('height', 'auto')
        }}
        min={50}
        max={1500}
      />
      <div className='flex items-end gap-4'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='width'>Width</Label>
          <Input
            type='number'
            id='width'
            value={data.width}
            min={50}
            max={1500}
            onChange={(e) =>
              updateCurrentCategoryField('width', e.target.value)
            }
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='height'>Height</Label>
          <Input
            type='number'
            id='height'
            value={data.height}
            min={50}
            max={1500}
            onChange={(e) =>
              updateCurrentCategoryField('height', e.target.value)
            }
            placeholder='auto'
          />
        </div>
        <SizeUnitSelect />
      </div>
    </div>
  )
}
