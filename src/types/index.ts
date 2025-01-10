import { templates } from '@/templates'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

type TextStyles = 'bold' | 'uderline' | 'italic' | 'line-through'

export interface TextData {
  value: string
  fontFamily: string
  fontSize: {
    value: number
    unit: 'px' | 'rem' | 'cm'
  }
  color: string
  align: 'left' | 'center' | 'right'
  styles: TextStyles[]
  strokeColor: string
  strokeWidth: number
  backgroundColor: string
}

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

export type TemplateData = {
  [key: string]: TextData
}

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  badge?: string
  element: FC
  data: TemplateData
}

export interface Templates {
  [key: string]: Template
}

export type TemplateNames = keyof typeof templates
