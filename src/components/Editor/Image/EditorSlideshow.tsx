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

  const handleChangeSlideshowInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const duplicatedArray = [...data.slideshowItems]
    duplicatedArray[index] = e.target.value

    updateCurrentCategoryField('slideshowItems', duplicatedArray)
  }

  const handleBlur = () => {
    if (data.slideshowInterval < 500) {
      updateCurrentCategoryField('slideshowItems', 500)
    }
  }

  return (
    <>
      <Input
        value={data.src} // First element of slide show is regular image src
        onChange={(e) => updateCurrentCategoryField('src', e.target.value)}
        placeholder='1 image URL'
      />
      {Array.from({ length: 2 }).map((_, index) => (
        <Input
          key={index}
          value={data.slideshowItems[index]} // First element of slide show is regular image src
          onChange={(e) => handleChangeSlideshowInput(e, index)}
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
          updateCurrentCategoryField('slideshowInterval', e.target.value)
        }
        placeholder='Interval'
      />
    </>
  )
}
