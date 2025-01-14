import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { TemplateContext } from '@/contexts/TemplateContext'
import type {
  ImageData,
  LinkData,
  TemplateSubCategoryField,
  TemplateSubCategoryFieldType,
  TextData,
  ToggleData
} from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChevronRight } from 'lucide-react'
import { ChangeEvent, FC, useContext } from 'react'

export const CreateSidebarSubCategoryItem: FC<TemplateSubCategoryField> = (
  props
) => {
  const { type, name, label, placeholder, editor = false } = props
  const { data, updateField, setActiveSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center'>
        <Label
          htmlFor={name}
          className='flex items-center justify-between gap-4 pr-2'
        >
          <span>{label}</span>
          {editor && (
            <Button onClick={() => setActiveSubCategory(props)} variant='ghost'>
              <ChevronRight />
            </Button>
          )}
        </Label>
        {type === 'toggle' && (
          <Checkbox
            id={name}
            onCheckedChange={(value) => updateField(name, value)}
            checked={(data[name] as ToggleData).checked}
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

interface CreateSidebarSubCategoryItemFieldProps {
  type: TemplateSubCategoryFieldType
  name: string
  placeholder?: string
}

export const CreateSidebarSubCategoryItemField: FC<
  CreateSidebarSubCategoryItemFieldProps
> = ({ type, name, placeholder }) => {
  const { data, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof TextData | keyof ImageData | keyof LinkData
  ) => {
    updateField(name, { ...data[name], [fieldName]: e.target.value })
  }

  switch (type) {
    case 'text':
      return (
        <Input
          value={(data[name] as TextData).value}
          onChange={(e) => handleChange(e, 'value')}
          placeholder={placeholder}
        />
      )
    case 'image':
      return (
        <Input
          type='url'
          value={(data[name] as ImageData).src}
          onChange={(e) => handleChange(e, 'src')}
          placeholder={placeholder}
        />
      )

    case 'link':
      return (
        <Input
          type='url'
          value={(data[name] as LinkData).url}
          onChange={(e) => handleChange(e, 'url')}
          placeholder={placeholder}
        />
      )
  }
}
