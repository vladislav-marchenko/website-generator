import type {
  TemplateData,
  TemplateNames,
  TemplateSubCategoryField,
  TextData
} from '.'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateContextValues {
  selectedTemplate: TemplateNames
  setSelectedTemplate: Dispatch<SetStateAction<TemplateNames>>
  data: TemplateData
  setData: Dispatch<SetStateAction<TemplateData>>
  activeCategoryIndex: number
  setActiveCategoryIndex: Dispatch<SetStateAction<number>>
  activeSubCategory: TemplateSubCategoryField | null
  setActiveSubCategory: Dispatch<
    SetStateAction<TemplateSubCategoryField | null>
  >
  updateCurrentCategoryField: (fieldName: string, value: unknown) => void
  activeSubCategoryData: TextData | null
}

export interface ThemeContextValues {
  theme: 'dark' | 'light'
  changeTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}
