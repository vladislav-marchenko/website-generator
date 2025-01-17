import { templatesData } from '@/templates'
import { TemplateName, TemplateSubCategoryField, UpdateField } from '@/types'
import { type TemplateContextValues } from '@/types/contexts'
import { set } from 'lodash'
import { createContext, PropsWithChildren, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const { template } = useParams()
  if (!templatesData.hasOwnProperty(template ?? '')) {
    return <Navigate to='/templates' />
  }

  const selectedTemplate = template as TemplateName

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

  const updateField: UpdateField = (path, value) => {
    setData(set({ ...data }, path, value))
  }

  const value = {
    selectedTemplate,
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
