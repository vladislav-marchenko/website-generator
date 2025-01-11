import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible'
import { CreateSidebarSubCategoryItem } from './CreateSidebarSubCategoryItem'
import { TemplateSubCategoryField } from '@/types'
import { ChevronDown } from 'lucide-react'
import { FC } from 'react'

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
      <CollapsibleContent>
        <div className='flex flex-col gap-4 p-1 pl-4'>
          {fields.map((field) => (
            <CreateSidebarSubCategoryItem key={field.name} {...field} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
