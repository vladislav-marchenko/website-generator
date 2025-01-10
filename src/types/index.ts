import { templates } from '@/templates'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

export type TemplateSubCategoryField = {
  type: 'text'
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

export interface DataField {
  value: string
  fontFamily: string
  fontSize: {
    value: number
    unit: 'px' | 'rem' | 'cm'
  }
  color?: string
}

export interface DataFields {
  [key: string]: DataField
}

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  badge?: string
  element: FC
  dataFields: DataFields
}

export interface Templates {
  [key: string]: Template
}

export type TemplateNames = keyof typeof templates
