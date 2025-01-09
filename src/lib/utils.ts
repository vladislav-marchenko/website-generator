import { templates } from '@/templates'
import { TemplateNames } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getSubdomain = () => {
  const hostnameParts = window.location.hostname.split('.')
  if (hostnameParts.length > 1) return hostnameParts[0]

  return null
}

export const getTemplateFields = (selectedTemplate: TemplateNames) => {
  const result = {}

  templates[selectedTemplate].categories.forEach(({ subCategories }) => {
    subCategories.forEach(({ fields }) => {
      fields.forEach(({ name }) => {
        Object.assign(result, { [name]: '' })
      })
    })
  })

  return result
}
