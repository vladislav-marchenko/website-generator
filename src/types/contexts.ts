import type { UpdateField } from '.'
import {
  Data,
  TemplateData,
  TemplateName,
  TemplateSubCategoryField
} from './templates'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateContextValues {
  selectedTemplate: TemplateName
  data: TemplateData
  setData: Dispatch<SetStateAction<TemplateData>>
  activeCategoryIndex: number
  setActiveCategoryIndex: Dispatch<SetStateAction<number>>
  activeSubCategory: TemplateSubCategoryField | null
  setActiveSubCategory: Dispatch<
    SetStateAction<TemplateSubCategoryField | null>
  >
  updateField: UpdateField
  activeSubCategoryData: Data | null
}

export interface ThemeContextValues {
  theme: 'dark' | 'light'
  changeTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}
