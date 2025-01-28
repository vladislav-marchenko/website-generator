import { categoriesFields } from '@/consts'
import { PropertyPath } from 'lodash'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

export interface PricingCard {
  label: string
  description: string
  price: number
  oldPrice?: number
  features: string[]
  button: {
    label: string
    href: string
  }
}

export type UpdateField = (path: PropertyPath, value: unknown) => void
export type CategoryName = keyof typeof categoriesFields

export type CategoriesField = {
  label: string
  icon: LucideIcon
  element: FC
  creatorOnly?: boolean
}
export interface CategoriesFields {
  [key: string]: CategoriesField
}
