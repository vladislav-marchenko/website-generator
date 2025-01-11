import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChangeEvent, useContext } from 'react'

export const EditorSlideshow = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const duplicatedArray = [...data.items]
    console.log(duplicatedArray, index)
    duplicatedArray[index] = e.target.value

    updateCurrentCategoryField('items', duplicatedArray)
  }

  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Input
          key={index}
          value={data.items[index]}
          onChange={(e) => handleChange(e, index)}
          placeholder={`${index + 1} image URL`}
        />
      ))}
      <Label>Interval (ms)</Label>
      <Input
        type='number'
        value={data.slideshowInterval}
        onChange={(e) =>
          updateCurrentCategoryField('slideshowInterval', e.target.value)
        }
        placeholder='Interval'
      />
    </>
  )
}
