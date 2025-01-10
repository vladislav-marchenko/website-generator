import type {
  DataField,
  DataFields,
  TemplateNames,
  TemplateSubCategoryField
} from '.'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateContextValues {
  selectedTemplate: TemplateNames
  setSelectedTemplate: Dispatch<SetStateAction<TemplateNames>>
  data: DataFields
  setData: Dispatch<SetStateAction<DataFields>>
  activeCategoryIndex: number
  setActiveCategoryIndex: Dispatch<SetStateAction<number>>
  activeSubCategory: TemplateSubCategoryField | null
  setActiveSubCategory: Dispatch<
    SetStateAction<TemplateSubCategoryField | null>
  >
  updateCurrentCategoryField: (fieldName: string, value: unknown) => void
  activeSubCategoryData: DataField | null
}

export interface ThemeContextValues {
  theme: 'dark' | 'light'
  changeTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}
