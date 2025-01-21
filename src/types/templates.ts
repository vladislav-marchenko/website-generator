import { UpdateField } from '.'
import { templates } from '@/templates'
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

export type Data = TextData | ImageData | LinkData | ToggleData | ColorData

interface CommonData {
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

export interface ColorData {
  value: string
}

interface TemplateTextSubCategoryField {
  type: 'text'
  defaultValues?: Partial<TextData>
  editor?: boolean
  placeholder?: string
}

interface TemplateImageSubCategoryField {
  type: 'image'
  defaultValues?: Partial<ImageData>
  editor?: boolean
  placeholder?: string
}

interface TemplateLinkSubCategoryField {
  type: 'link'
  defaultValues?: Partial<LinkData>
  editor?: boolean
  placeholder: string
}

interface TemplateToggleSubCategoryField {
  type: 'toggle'
  defaultValues?: Partial<ToggleData>
}

interface TemplateColorSubCategoryField {
  type: 'color'
  defaultValues?: Partial<ColorData>
}

export type TemplateSubCategoryField = {
  label: string
  name: string
} & (
  | TemplateTextSubCategoryField
  | TemplateImageSubCategoryField
  | TemplateLinkSubCategoryField
  | TemplateToggleSubCategoryField
  | TemplateColorSubCategoryField
)

export type DefaultValues = {
  text: TextData
  image: ImageData
  link: LinkData
  toggle: ToggleData
  color: ColorData
}

export type TemplateSubCategoryFieldType = keyof DefaultValues

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
  description: string
  shortDescription: string
  features: string[]
  price: number
  categories: TemplateCategory[]
  element: FC<{ data: TemplateData; updateField?: UpdateField }>
}

export type Templates = {
  [key: string]: Template
}

export type TemplateName = keyof typeof templates
