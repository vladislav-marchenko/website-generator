import { templatesData } from '@/templates'
import { TemplateData, TemplateNames, TemplateSubCategoryField } from '@/types'
import { type TemplateContextValues } from '@/types/contexts'
import { createContext, PropsWithChildren, useState } from 'react'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateNames>('classic')
  const [data, setData] = useState(templatesData[selectedTemplate])
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activeSubCategory, setActiveSubCategory] =
    useState<TemplateSubCategoryField | null>(null)

  const activeSubCategoryData =
    activeSubCategory && data[activeSubCategory.name]

  const updateCurrentCategoryField = (
    fieldName: keyof TemplateData,
    value: unknown
  ) => {
    if (!activeSubCategory) return

    setData((data) => ({
      ...data,
      [activeSubCategory.name]: {
        ...data[activeSubCategory.name],
        [fieldName]: value
      }
    }))
  }

  const value = {
    selectedTemplate,
    setSelectedTemplate,
    data,
    setData,
    activeCategoryIndex,
    setActiveCategoryIndex,
    activeSubCategory,
    setActiveSubCategory,
    updateCurrentCategoryField,
    activeSubCategoryData
  }

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}
