import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorSlideshow = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  const handleBlur = () => {
    if (data.slideshowInterval < 500) {
      updateField(`${data.name}.slideshowInterval`, 500)
    }

    if (data.slideshowInterval > 10000) {
      updateField(`${data.name}.slideshowInterval`, 10000)
    }
  }

  return (
    <>
      <Input
        value={data.src}
        onChange={(e) => updateField(`${data.name}.src`, e.target.value)}
        placeholder='1 image URL'
      />
      {Array.from({ length: 2 }).map((_, index) => (
        <Input
          key={index}
          value={data.slideshowItems[index] ?? ''}
          onChange={(e) =>
            updateField(`${data.name}.slideshowItems[${index}]`, e.target.value)
          }
          placeholder={`${index + 2} image URL`}
        />
      ))}
      <Label>Interval (ms)</Label>
      <Input
        type='number'
        min={500}
        max={10000}
        value={data.slideshowInterval}
        onBlur={handleBlur}
        onChange={(e) =>
          updateField(`${data.name}.slideshowInterval`, e.target.value)
        }
        placeholder='Interval'
      />
    </>
  )
}
