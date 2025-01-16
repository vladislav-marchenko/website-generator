import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
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
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <ToggleGroup
      type='multiple'
      onValueChange={(value) => updateField(`${data.name}.styles`, value)}
    >
      {items.map(({ value, icon: Icon }) => (
        <ToggleGroupItem key={value} value={value}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
