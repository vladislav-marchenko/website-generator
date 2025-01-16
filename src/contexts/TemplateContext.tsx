import { templatesData } from '@/templates'
import { TemplateNames, TemplateSubCategoryField } from '@/types'
import { type TemplateContextValues } from '@/types/contexts'
import { PropertyPath, set } from 'lodash'
import { createContext, PropsWithChildren, useState } from 'react'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateNames>('classic')
  const [data, setData] = useState(templatesData[selectedTemplate])
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activeSubCategory, setActiveSubCategory] =
    useState<TemplateSubCategoryField | null>(null)

  const activeSubCategoryData = getActiveSubCategoryData()

  function getActiveSubCategoryData() {
    if (!activeSubCategory) return null

    if (activeSubCategory.type === 'link') {
      return data.links[activeSubCategory.name]
    }

    return data[activeSubCategory.name]
  }

  const updateField = (path: PropertyPath, value: unknown) => {
    setData(set({ ...data }, path, value))
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
    updateField,
    activeSubCategoryData
  }

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}
