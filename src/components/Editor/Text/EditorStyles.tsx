import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Minus
} from 'lucide-react'
import { useContext } from 'react'

const items = [
  {
    value: 'bold',
    icon: Bold
  },
  {
    value: 'italic',
    icon: Italic
  },
  {
    value: 'underline',
    icon: Underline
  },
  {
    value: 'line-through',
    icon: Minus
  }
]

export const EditorStyles = () => {
  const { updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <ToggleGroup
      type='multiple'
      onValueChange={(value) => updateCurrentCategoryField('styles', value)}
      className='justify-start'
    >
      {items.map(({ value, icon: Icon }) => (
        <ToggleGroupItem key={value} value={value}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
