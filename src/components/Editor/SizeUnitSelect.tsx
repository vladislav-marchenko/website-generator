import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { fontSizeUnits } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData, ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const SizeUnitSelect = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData | ImageData
  if (!data) return

  return (
    <Select
      value={data.sizeUnit}
      onValueChange={(unit) => updateCurrentCategoryField('sizeUnit', unit)}
    >
      <SelectTrigger className='w-1/4'>
        <SelectValue placeholder={fontSizeUnits[0]} />
      </SelectTrigger>
      <SelectContent>
        {fontSizeUnits.map((unit) => (
          <SelectItem key={unit} value={unit}>
            {unit}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
