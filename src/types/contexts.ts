import type { CategoryName, UpdateField } from '.'
import {
  Data,
  TemplateData,
  TemplateName,
  TemplateSubCategoryField
} from './templates'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateEditorContextValues {
  updateField: UpdateField
  activeCategory: CategoryName
  setActiveCategory: Dispatch<SetStateAction<CategoryName>>
  activeSubCategory: TemplateSubCategoryField | null
  setActiveSubCategory: Dispatch<
    SetStateAction<TemplateSubCategoryField | null>
  >
  activeSubCategoryData: Data | null
}

export interface TemplateContextValues {
  data: TemplateData
  setData: Dispatch<SetStateAction<TemplateData>>
  selectedTemplate: TemplateName
  updateField: UpdateField | null
}

export interface ThemeContextValues {
  theme: 'dark' | 'light'
  changeTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}
