import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'
import { useContext } from 'react'

const items = [
  {
    value: 'left',
    icon: AlignLeft
  },
  {
    value: 'center',
    icon: AlignCenter
  },
  {
    value: 'right',
    icon: AlignRight
  }
]

export const EditorAlign = () => {
  const { updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <ToggleGroup
      type='single'
      defaultValue='center'
      onValueChange={(value) => updateCurrentCategoryField('align', value)}
    >
      {items.map(({ value, icon: Icon }) => (
        <ToggleGroupItem key={value} value={value}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
