import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateSubCategoryField } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChevronRight } from 'lucide-react'
import { FC, useContext } from 'react'

export const CreateSidebarSubCategoryItem: FC<TemplateSubCategoryField> = (
  props
) => {
  const { type, name, label, placeholder } = props
  const { data, setData, setActiveSubCategory } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div className='flex flex-col gap-2'>
      <Label className='flex items-center justify-between gap-4'>
        <span>{label}</span>
        <Button onClick={() => setActiveSubCategory(props)} variant='ghost'>
          <ChevronRight />
        </Button>
      </Label>
      <Input
        value={data[name].value}
        onChange={(e) =>
          setData((data) => ({
            ...data,
            [name]: { ...data[name], value: e.target.value }
          }))
        }
        placeholder={placeholder}
      />
    </div>
  )
}
