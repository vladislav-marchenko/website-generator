import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { fontSizeUnits } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorFontSize = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <>
      <div className='flex items-center gap-2'>
        <Input
          type='number'
          min={10}
          max={300}
          value={data.fontSizeValue}
          onChange={(e) =>
            updateCurrentCategoryField('fontSizeValue', e.target.value)
          }
        />
        <Select
          onValueChange={(unit) =>
            updateCurrentCategoryField('fontSizeUnit', unit)
          }
        >
          <SelectTrigger className='w-1/4'>
            <SelectValue placeholder={fontSizeUnits[0]} />
          </SelectTrigger>
          <SelectContent>
            {fontSizeUnits.map((unit) => (
              <SelectItem value={unit}>{unit}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Slider
        defaultValue={[data.fontSizeValue]}
        min={10}
        max={300}
        onValueChange={(value) =>
          updateCurrentCategoryField('fontSizeValue', value[0])
        }
      />
    </>
  )
}
