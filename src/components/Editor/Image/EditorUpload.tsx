import { Button } from '@/components/ui/button'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { ChangeEvent, useContext } from 'react'

export const EditorUpload = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.includes('image/')) return

    updateField(`${data.name}.uploaded`, file)
  }

  return (
    <>
      <Button asChild>
        <label htmlFor='upload'>Upload</label>
      </Button>
      <input
        type='file'
        id='upload'
        className='hidden'
        onChange={handleChange}
        accept='image/png, image/jpeg, image/gif'
        placeholder='Upload'
      />
      {data.uploaded && <span>{data.uploaded.name}</span>}
    </>
  )
}
