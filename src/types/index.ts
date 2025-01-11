import { editorFields } from '@/consts'
import { templates } from '@/templates'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'

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
  items: string[] // One element means a regular image. Two or more means a slide show
  uploaded?: File
  width: number
  height: number | 'auto'
  opacity: number
  borderColor: string
  borderWidth: number
  slideshowInterval: number
}

export type TemplateSubCategoryField = {
  type: keyof typeof editorFields
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
  [key: string]: TextData | ImageData
}

interface Template {
  label: string
  price: number
  categories: TemplateCategory[]
  element: FC
  data: TemplateData
}

export interface Templates {
  [key: string]: Template
}

export type TemplateNames = keyof typeof templates

export interface DefaultValues {
  text: TextData
  image: ImageData
}
