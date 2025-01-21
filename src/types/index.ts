import { PropertyPath } from 'lodash'

export interface PricingCard {
  label: string
  description: string
  price: number
  button: {
    label: string
    href: string
  }
}

export type UpdateField = (path: PropertyPath, value: unknown) => void
