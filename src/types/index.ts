import { templates } from '@/templates'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

type TextStyles = 'bold' | 'uderline' | 'italic' | 'line-through'
export type Animation =
  | 'pulse'
  | 'ping'
  | 'spin'
  | 'bounce'
  | 'in'
  | 'wiggle'
  | 'heartBeat'
  | 'hflip'
  | 'vflip'
  | 'swing'
  | 'rubberBand'
  | 'flash'
  | 'headShake'
  | 'wobble'
  | 'jello'
type FontSizeUnit = 'px' | 'rem' | 'cm'

export interface TextData {
  value: string
  fontFamily: string
  fontSizeValue: number
  fontSizeUnit: FontSizeUnit
  color: string
  align: 'left' | 'center' | 'right'
  styles: TextStyles[]
  strokeColor: string
  strokeWidth: number
  backgroundColor: string
  rotation: number
  animation: Animation
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
