import { editorFields } from '@/consts'
import { templates } from '@/templates'
import { PropertyPath } from 'lodash'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

type TextStyles = 'bold' | 'uderline' | 'italic' | 'line-through'

type AnimationValue =
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

export interface Animation {
  label: string
  value: AnimationValue
}

type SizeUnit = 'px' | 'rem' | 'cm' | '%'

export type Data = TextData | ImageData | LinkData | ToggleData

interface CommonData extends TemplateSubCategoryField {
  rotation: number
  animation: AnimationValue | null
  animationDuration: number
}

export interface TextData extends CommonData {
  value: string
  fontFamily: string
  fontSizeValue: number
  sizeUnit: SizeUnit
  color: string
  align?: 'left' | 'center' | 'right'
  styles: TextStyles[]
  strokeColor: string
  strokeWidth: number
  backgroundColor: string
}

export interface ImageData extends CommonData {
  src: string
  slideshowItems: string[]
  slideshowInterval: number
  uploaded?: File
  width: number
  height: number | 'auto'
  sizeUnit: SizeUnit
  opacity: number
  borderColor: string
  borderWidth: number
}

export interface LinkData extends CommonData {
  url: string
  iconName: string
  size: number
}

export interface ToggleData {
  value: boolean
}

export type TemplateSubCategoryFieldType = keyof typeof editorFields

export interface TemplateSubCategoryField {
  type: TemplateSubCategoryFieldType
  label: string
  name: string
  placeholder?: string
  editor?: boolean
  defaultValues?: Partial<Data>
}

type TemplateSubCategory = {
  label: string
  fields: TemplateSubCategoryField[]
}

type TemplateCategory = {
  name: string
  icon: LucideIcon
  subCategories: TemplateSubCategory[]
}

type TemplateLinksData = {
  links: {
    [key: string]: LinkData
  }
}

export type TemplateData = {
  [key: string]: Data
} & TemplateLinksData

export interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  element: FC<{ data: TemplateData; updateField?: UpdateField }>
}

export type Templates = {
  [key: string]: Template
}

export type TemplateName = keyof typeof templates

export interface DefaultValues {
  text: Omit<TextData, keyof TemplateSubCategoryField>
  image: Omit<ImageData, keyof TemplateSubCategoryField>
  link: Omit<LinkData, keyof TemplateSubCategoryField>
  toggle: Omit<ToggleData, keyof TemplateSubCategoryField>
}

export interface PricingCard {
  title: string
  description: string
  price: number
  button: {
    label: string
    href: string
  }
}

export type UpdateField = (path: PropertyPath, value: unknown) => void
