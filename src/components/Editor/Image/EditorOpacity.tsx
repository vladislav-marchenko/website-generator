import { Slider } from '@/components/ui/slider'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorOpacity = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <Slider
      className='my-2'
      value={[data.opacity]}
      onValueChange={(value) => updateField(`${data.name}.opacity`, value[0])}
      min={0}
      max={100}
    />
  )
}
