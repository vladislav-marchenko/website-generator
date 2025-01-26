import { TemplateContext } from './TemplateContext'
import { categoriesFields } from '@/consts'
import { CategoryName } from '@/types'
import {
  TemplateContextValues,
  TemplateEditorContextValues
} from '@/types/contexts'
import { TemplateSubCategoryField } from '@/types/templates'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const TemplateEditorContext =
  createContext<TemplateEditorContextValues | null>(null)

export const TemplateEditorContextProvider = ({
  children
}: PropsWithChildren) => {
  const [searchParams] = useSearchParams()
  const { data, updateField, selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const [activeCategory, setActiveCategory] = useState(getActiveCategory)
  const [activeSubCategory, setActiveSubCategory] =
    useState<TemplateSubCategoryField | null>(null)

  const activeSubCategoryData = getActiveSubCategoryData()

  function getActiveCategory() {
    const categoryParam = searchParams.get('category')
    if (categoriesFields.hasOwnProperty(categoryParam ?? '')) {
      return categoryParam as CategoryName
    }

    return Object.keys(categoriesFields)[0] as CategoryName
  }

  function getActiveSubCategoryData() {
    if (!activeSubCategory) return null

    if (activeSubCategory.type === 'link') {
      return data.links[activeSubCategory.name]
    }

    return data[activeSubCategory.name]
  }

  const value = {
    selectedTemplate,
    data,
    activeCategory,
    setActiveCategory,
    activeSubCategory,
    setActiveSubCategory,
    updateField,
    activeSubCategoryData
  }

  return (
    <TemplateEditorContext.Provider value={value}>
      {children}
    </TemplateEditorContext.Provider>
  )
}
