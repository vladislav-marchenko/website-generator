import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TemplateContext } from '@/contexts/TemplateContext'
import type { Animation } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

const items: Animation[] = [
  'pulse',
  'ping',
  'spin',
  'bounce',
  'in',
  'wiggle',
  'heartBeat',
  'hflip',
  'vflip',
  'swing',
  'rubberBand',
  'flash',
  'headShake',
  'wobble',
  'jello'
]

export const EditorAnimations: FC = () => {
  const { updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <ToggleGroup
      type='single'
      onValueChange={(value) => updateCurrentCategoryField('animation', value)}
      className='flex flex-wrap gap-2'
    >
      {items.map((direction) => (
        <ToggleGroupItem
          value={direction}
          className='border border-neutral-600/40'
        >
          {direction}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
