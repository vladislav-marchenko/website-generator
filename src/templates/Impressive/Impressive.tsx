import { TemplateLayout } from '../TemplateLayout'
import { TemplateData, UpdateField } from '@/types'
import { FC } from 'react'

interface ImpressiveProps {
  data: TemplateData
  updateField?: UpdateField
}

export const Impressive: FC<ImpressiveProps> = ({ data, updateField }) => {
  return <TemplateLayout data={data}>hello world</TemplateLayout>
}
