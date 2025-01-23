import type { CategoryName, UpdateField } from '.'
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
  activeCategory: CategoryName
  setActiveCategory: Dispatch<SetStateAction<CategoryName>>
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
