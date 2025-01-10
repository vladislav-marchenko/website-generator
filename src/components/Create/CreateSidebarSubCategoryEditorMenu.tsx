import { FontsPicker } from '../Editor/Text/FontsPicker'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { Slider } from '../ui/slider'
import { Button } from '@/components/ui/button'
import { fontSizeUnits, textEditorFields } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn } from '@/lib/utils'
import type { TemplateContextValues } from '@/types/contexts'
import { ChevronLeft } from 'lucide-react'
import { FC, useContext } from 'react'

export const CreateSidebarSubCategoryEditorMenu: FC = () => {
  const { activeSubCategory, setActiveSubCategory, data, setData } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const handleUpdateCategoryField = (
    categoryName: string,
    fieldName: string,
    value: unknown
  ) => {
    setData((data) => ({
      ...data,
      [categoryName]: {
        ...data[categoryName],
        [fieldName]: value
      }
    }))
  }

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 right-0 top-0 bg-neutral-900 p-4 transition-transform duration-300',
        {
          'translate-x-full': !activeSubCategory
        }
      )}
    >
      <Button onClick={() => setActiveSubCategory(null)} variant='ghost'>
        <ChevronLeft />
        <span>Back</span>
      </Button>

      {activeSubCategory && (
        <div className='flex flex-col gap-8 py-4'>
          {textEditorFields.map(({ label, element: Element }) => (
            <div className='flex flex-col gap-2'>
              <Label>{label}</Label>
              <Element />
            </div>
          ))}
          <div className='flex flex-col gap-2'>
            <Label>Content</Label>
            <Input
              value={data[activeSubCategory.name].value}
              onChange={(e) => {
                handleUpdateCategoryField(
                  activeSubCategory.name,
                  'value',
                  e.target.value
                )
              }}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label>Font family</Label>
            <FontsPicker
              onChange={(fontFamily) => {
                handleUpdateCategoryField(
                  activeSubCategory.name,
                  'fontFamily',
                  fontFamily
                )
              }}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Label>Size</Label>
            <div className='flex items-center gap-2'>
              <Input
                type='number'
                min={10}
                max={300}
                value={data[activeSubCategory.name].fontSize.value}
                onChange={(e) => {
                  handleUpdateCategoryField(
                    activeSubCategory.name,
                    'fontSize',
                    {
                      ...data[activeSubCategory.name].fontSize,
                      value: e.target.value
                    }
                  )
                }}
              />
              <Select
                onValueChange={(unit) => {
                  handleUpdateCategoryField(
                    activeSubCategory.name,
                    'fontSize',
                    { ...data[activeSubCategory.name].fontSize, unit }
                  )
                }}
              >
                <SelectTrigger className='w-[180px]'>
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
              defaultValue={[data[activeSubCategory.name].fontSize.value]}
              min={10}
              max={300}
              onValueChange={(value) => {
                handleUpdateCategoryField(activeSubCategory.name, 'fontSize', {
                  ...data[activeSubCategory.name].fontSize,
                  value: value[0]
                })
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
