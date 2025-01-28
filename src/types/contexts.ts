import type { CategoryName, UpdateField } from '.'
import {
  Data,
  TemplateData,
  TemplateName,
  TemplateSubCategoryField
} from './templates'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateEditorContextValues {
  selectedTemplate: TemplateName
  data: TemplateData
  activeCategory: CategoryName
  setActiveCategory: Dispatch<SetStateAction<CategoryName>>
  activeSubCategory: TemplateSubCategoryField | null
  setActiveSubCategory: Dispatch<
    SetStateAction<TemplateSubCategoryField | null>
  >
  updateField: UpdateField
  activeSubCategoryData: Data | null
}

export interface TemplateContextValues {
  data: TemplateData
  setData: Dispatch<SetStateAction<TemplateData>>
  selectedTemplate: TemplateName
  updateField: UpdateField
}

export interface ThemeContextValues {
  theme: 'dark' | 'light'
  changeTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}
