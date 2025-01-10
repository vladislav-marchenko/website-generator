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
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorFontSize = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  if (!activeSubCategoryData) return

  return (
    <>
      <div className='flex items-center gap-2'>
        <Input
          type='number'
          min={10}
          max={300}
          value={activeSubCategoryData?.fontSize.value}
          onChange={(e) => {
            updateCurrentCategoryField('fontSize', {
              ...activeSubCategoryData?.fontSize,
              value: e.target.value
            })
          }}
        />
        <Select
          onValueChange={(unit) => {
            updateCurrentCategoryField('fontSize', {
              ...activeSubCategoryData?.fontSize,
              unit
            })
          }}
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
        defaultValue={[activeSubCategoryData.fontSize.value]}
        min={10}
        max={300}
        onValueChange={(value) => {
          updateCurrentCategoryField('fontSize', {
            ...activeSubCategoryData?.fontSize,
            value: value[0]
          })
        }}
      />
    </>
  )
}
