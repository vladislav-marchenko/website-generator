import { UpdateField } from '.'
import { templates } from '@/templates'
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
  label: string
  name: string
  placeholder?: string
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

interface TemplateTextCategoryField {
  type: 'text'
  defaultValues?: Partial<TextData>
}

interface TemplateImageCategoryField {
  type: 'image'
  defaultValues?: Partial<ImageData>
}

interface TemplateLinkCategoryField {
  type: 'link'
  defaultValues?: Partial<LinkData>
}

interface TemplateToggleCategoryField {
  type: 'toggle'
  defaultValues?: Partial<ToggleData>
}

interface TemplateColorCategoryField {
  type: 'color'
  defaultValues?: Partial<ColorData>
}

export type TemplateSubCategoryField = {
  label: string
  name: string
  editor?: boolean
  placeholder?: string
} & (
  | TemplateTextCategoryField
  | TemplateImageCategoryField
  | TemplateLinkCategoryField
  | TemplateToggleCategoryField
  | TemplateColorCategoryField
)

export type DefaultValues = {
  text: TextData
  image: ImageData
  link: LinkData
  toggle: ToggleData
  color: ColorData
}

export type TemplateSubCategoryFieldType = keyof DefaultValues

type TemplateCategory = {
  label: string
  fields: TemplateSubCategoryField[]
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
  badge?: string
  categories: TemplateCategory[]
  element: FC<{ data: TemplateData; updateField?: UpdateField }>
}

export type Templates = {
  [key: string]: Template
}

export type TemplateName = keyof typeof templates
