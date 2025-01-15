import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { CreateSidebarSubCategoryItemField } from './CreateSidebarSubCategoryItemField'
import { TemplateContext } from '@/contexts/TemplateContext'
import type { TemplateSubCategoryField, ToggleData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChevronRight } from 'lucide-react'
import { FC, useContext } from 'react'

export const CreateSidebarSubCategoryItem: FC<TemplateSubCategoryField> = (
  props
) => {
  const { type, name, label, placeholder, editor = false } = props
  const { data, updateField, setActiveSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  console.log(data)

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center'>
        <Label
          htmlFor={name}
          className='flex items-center justify-between gap-4 pr-2'
        >
          {label}
        </Label>
        {editor && (
          <Button onClick={() => setActiveSubCategory(props)} variant='ghost'>
            <ChevronRight />
          </Button>
        )}
        {type === 'toggle' && (
          <Checkbox
            id={name}
            onCheckedChange={(value) => updateField(name, value)}
            checked={(data[name] as ToggleData).value}
          />
        )}
      </div>
      {type !== 'toggle' && (
        <CreateSidebarSubCategoryItemField
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
