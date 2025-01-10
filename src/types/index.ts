import { templates } from '@/templates'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

type TextStyles = 'bold' | 'uderline' | 'italic' | 'line-through'

interface TextData {
  value: string
  fontFamily: string
  fontSize: {
    value: number
    unit: 'px' | 'rem' | 'cm'
  }
  color: string
  align: 'left' | 'center' | 'right'
  styles: TextStyles[]
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

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  badge?: string
  element: FC
  data: {
    [key: string]: TextData
  }
}

export interface Templates {
  [key: string]: Template
}

export type TemplateNames = keyof typeof templates
