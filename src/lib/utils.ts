import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const getSubdomain = () => {
  const hostnameParts = window.location.hostname.split('.')
  if (hostnameParts.length > 1) return hostnameParts[0]

  return null
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
