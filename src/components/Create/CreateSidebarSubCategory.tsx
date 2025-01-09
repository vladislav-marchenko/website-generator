import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible'
import { Input } from '../ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateSubCategoryField } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { Label } from '@radix-ui/react-dropdown-menu'
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
  const { data, setData } = useContext(TemplateContext) as TemplateContextValues

  return (
    <Collapsible>
      <CollapsibleTrigger className='flex items-center gap-4'>
        <span>{label}</span>
        <Button variant='ghost'>
          <ChevronDown />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className='p-1 pl-4'>
        {fields.map(({ name, label, placeholder }) => (
          <div key={name}>
            <Label>{label}</Label>
            <Input
              value={data[name]}
              onChange={(e) =>
                setData((data) => ({ ...data, [name]: e.target.value }))
              }
              placeholder={placeholder}
            />
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
