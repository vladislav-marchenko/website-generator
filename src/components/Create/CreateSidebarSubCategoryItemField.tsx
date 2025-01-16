import { Input } from '../ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import {
  ImageData,
  LinkData,
  TemplateSubCategoryFieldType,
  TextData
} from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

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

  switch (type) {
    case 'text':
      return (
        <Input
          value={(data[name] as TextData).value}
          id={name}
          onChange={(e) => updateField(`${name}.value`, e.target.value)}
          placeholder={placeholder}
        />
      )

    case 'image':
      return (
        <Input
          type='url'
          id={name}
          value={(data[name] as ImageData).src}
          onChange={(e) => updateField(`${name}.src`, e.target.value)}
          placeholder={placeholder}
        />
      )

    case 'link':
      return (
        <Input
          type='url'
          id={name}
          value={(data.links[name] as LinkData).url}
          onChange={(e) => updateField(`links.${name}.url`, e.target.value)}
          placeholder={placeholder}
        />
      )
  }
}
