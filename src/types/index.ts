import { editorFields } from '@/consts'
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

type FontSizeUnit = 'px' | 'rem' | 'cm'

export type Data = TextData | ImageData | LinkData

interface CommonData {
  rotation: number
  animation?: AnimationValue
}

export interface TextData extends CommonData {
  value: string
  fontFamily: string
  fontSizeValue: number
  fontSizeUnit: FontSizeUnit
  color: string
  align?: 'left' | 'center' | 'right'
  styles: TextStyles[]
  strokeColor: string
  strokeWidth: number
  backgroundColor: string
}

export interface ImageData extends CommonData {
  src: string // First item of slideshow
  slideshowItems: string[] // One element means a regular image. Two or more means a slide show
  slideshowInterval: number
  uploaded?: File
  width: number
  height: number | 'auto'
  opacity: number
  borderColor: string
  borderWidth: number
}

export interface LinkData extends CommonData {
  url: string
  icon: LucideIcon
}

export type TemplateSubCategoryFieldType = keyof typeof editorFields

export interface TemplateSubCategoryField {
  type: TemplateSubCategoryFieldType
  label: string
  name: string
  placeholder: string
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

export type TemplateData = {
  [key: string]: Data
}

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  element: FC
}

export type TemplateNames = 'classic'

export interface Templates {
  [key: string]: Template
}

export interface DefaultValues {
  text: TextData
  image: ImageData
  link: LinkData
}
