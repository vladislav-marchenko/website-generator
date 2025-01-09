import { TemplateNames } from '.'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateContextValues {
  selectedTemplate: TemplateNames
  setSelectedTemplate: Dispatch<SetStateAction<TemplateNames>>
  data: { [key: string]: string }
  setData: Dispatch<SetStateAction<{ [key: string]: string }>>
  activeCategoryIndex: number
  setActiveCategoryIndex: Dispatch<SetStateAction<number>>
}

export interface ThemeContextValues {
  theme: 'dark' | 'light'
  changeTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}
