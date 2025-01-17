import { TemplateLayout } from '../TemplateLayout'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface SimpleProps {
  data: TemplateData
  updateField?: UpdateField
}

export const Simple: FC<SimpleProps> = ({ data, updateField }) => {
  return <TemplateLayout data={data}>hello world</TemplateLayout>
}
