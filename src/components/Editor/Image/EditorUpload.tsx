import { Button } from '@/components/ui/button'
import { TemplateContext } from '@/contexts/TemplateContext'
import { ImageData } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const EditorUpload = () => {
  const { activeSubCategoryData, updateCurrentCategoryField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <>
      <Button asChild>
        <label htmlFor='upload'>Upload</label>
      </Button>
      <input
        type='file'
        id='upload'
        className='hidden'
        onChange={(e) =>
          updateCurrentCategoryField('uploaded', e.target.files?.[0])
        }
        accept='image/png, image/jpeg'
        placeholder='Upload'
      />
      {data.uploaded && <span>{data.uploaded.name}</span>}
    </>
  )
}
