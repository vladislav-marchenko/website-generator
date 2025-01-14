import { Input } from '../ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import {
  ImageData,
  LinkData,
  TemplateSubCategoryFieldType,
  TextData
} from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChangeEvent, FC, useContext } from 'react'

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
