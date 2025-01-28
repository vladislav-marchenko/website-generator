import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { BuilderSidebarSubCategoryItemField } from './BuilderSidebarSubCategoryItemField'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import {
  TemplateContextValues,
  TemplateEditorContextValues
} from '@/types/contexts'
import { TemplateSubCategoryField, ToggleData } from '@/types/templates'
import { ChevronRight } from 'lucide-react'
import { FC, useContext } from 'react'

export const BuilderSidebarSubCategoryItem: FC<TemplateSubCategoryField> = (
  props
) => {
  const { type, name, label, editor = false, placeholder = '' } = props

  const { data, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { setActiveSubCategory } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center'>
        <Label
          htmlFor={name}
          className='flex items-center justify-between gap-4 pr-2 font-arial-black'
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
            onCheckedChange={(value) => updateField(`${name}.value`, value)}
            checked={(data[name] as ToggleData).value}
          />
        )}
      </div>
      {type !== 'toggle' && (
        <BuilderSidebarSubCategoryItemField
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
