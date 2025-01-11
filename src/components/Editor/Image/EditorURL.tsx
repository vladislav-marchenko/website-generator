import { Input } from '@/components/ui/input'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChangeEvent, useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const duplicatedArray = [...data.items]
    duplicatedArray[0] = e.target.value

    updateCurrentCategoryField('slideshowItems', duplicatedArray)
  }

  return <Input value={data.items[0]} onChange={handleChange} />
}
