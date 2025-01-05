import { templates } from '@/templates'
import { FC } from 'react'

type TemplateCategoryField = {
  type: 'text' | 'url' | 'image'
  label: string
}

type TemplateCategory = {
  label: string
  fields: TemplateCategoryField[]
}

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  badge?: string
  element: FC
}

export interface Templates {
  [key: string]: Template
}

export type TemplateNames = keyof typeof templates
