import { Label } from '../ui/label'
import { Slider } from '../ui/slider'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { animations } from '@/consts'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData, LinkData, TextData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const EditorAnimations: FC = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as TextData | ImageData | LinkData
  if (!data) return

  return (
    <>
      <ToggleGroup
        type='single'
        value={data.animation || undefined}
        onValueChange={(value) =>
          updateCurrentCategoryField('animation', value)
        }
        className='flex flex-wrap gap-2'
      >
        {animations.map(({ label, value }) => (
          <ToggleGroupItem
            key={value}
            value={value}
            className='border border-neutral-600/40'
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className='flex items-center gap-4'>
        <Label>Duration:</Label>
        <Slider
          defaultValue={[data.animationDuration]}
          min={100}
          max={5000}
          onValueChange={(value) =>
            updateCurrentCategoryField('animationDuration', value[0])
          }
        />
      </div>
    </>
  )
}
