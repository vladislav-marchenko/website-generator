import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TextData } from '@/types'
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
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <ToggleGroup
      type='single'
      defaultValue={data.align}
      onValueChange={(value) => updateField(`${data.name}.align`, value)}
    >
      {items.map(({ value, icon: Icon }) => (
        <ToggleGroupItem key={value} value={value}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
