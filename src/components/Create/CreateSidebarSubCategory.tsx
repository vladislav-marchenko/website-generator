import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible'
import { CreateSidebarSubCategoryItem } from './CreateSidebarSubCategoryItem'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateSubCategoryField } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChevronDown } from 'lucide-react'
import { FC, useContext } from 'react'

interface CreateSidebarSubCategoryProps {
  label: string
  fields: TemplateSubCategoryField[]
}

export const CreateSidebarSubCategory: FC<CreateSidebarSubCategoryProps> = ({
  label,
  fields
}) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className='flex items-center gap-4'>
        <span>{label}</span>
        <Button variant='ghost'>
          <ChevronDown />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className='flex flex-col gap-8 p-1 pl-4'>
        {fields.map((field) => (
          <CreateSidebarSubCategoryItem key={field.name} {...field} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
