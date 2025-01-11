import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { animations } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const EditorAnimations: FC = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <ToggleGroup
      type='single'
      value={activeSubCategoryData?.animation?.value}
      onValueChange={(value) => updateCurrentCategoryField('animation', value)}
      className='flex flex-wrap gap-2'
    >
      {animations.map(({ label, value }) => (
        <ToggleGroupItem value={value} className='border border-neutral-600/40'>
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
