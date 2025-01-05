import { templates } from '@/templates'
import { type ClassicTemplate, type SimpleTemplate } from '@/types/templates'
import { PropsOf } from '@/types/utils'
import { useEffect, useState } from 'react'

export const Website = () => {
  const [data, setData] = useState<{
    template: 'classic' | 'simple'
    fields: ClassicTemplate | SimpleTemplate
  }>()

  useEffect(() => {
    fetch('https://dummyjson.com/test')
      .then((res) => res.json())
      .then((data) => setData({ fields: data, template: 'classic' }))
  }, [])

  if (!data) return <div>Loading...</div>

  const isExist = data.template in templates

  if (!isExist) {
    return <div>It seems like this template does not exist</div>
  }

  const TemplateElement = templates[data.template].element
  return (
    <TemplateElement {...(data.fields as PropsOf<typeof TemplateElement>)} />
  )
}
