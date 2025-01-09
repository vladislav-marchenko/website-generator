import { templates } from '@/templates'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

export type TemplateSubCategoryField = {
  type: 'text' | 'url' | 'image'
  label: string
  name: string
  placeholder: string
}

type TemplateSubCategory = {
  label: string
  fields: TemplateSubCategoryField[]
}

type TemplateCategory = {
  name: string
  icon: IconType
  subCategories: TemplateSubCategory[]
}

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  badge?: string
  element: FC
  dataFields: {
    [key: string]: string
  }
}

export interface Templates {
  [key: string]: Template
}

export type TemplateNames = keyof typeof templates
