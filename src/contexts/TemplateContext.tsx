import { categoriesFields } from '@/consts'
import { templatesData } from '@/templates'
import { CategoryName, UpdateField } from '@/types'
import { type TemplateContextValues } from '@/types/contexts'
import { TemplateName, TemplateSubCategoryField } from '@/types/templates'
import { set } from 'lodash'
import {
  createContext,
  PropsWithChildren,
  useLayoutEffect,
  useState
} from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const [searchParams] = useSearchParams()
  const template = searchParams.get('template')

  if (!templatesData.hasOwnProperty(template ?? '')) {
    return <Navigate to='/templates' />
  }

  const selectedTemplate = template as TemplateName

  const [data, setData] = useState(templatesData[selectedTemplate])
  const [activeCategory, setActiveCategory] = useState(getActiveCategory)
  const [activeSubCategory, setActiveSubCategory] =
    useState<TemplateSubCategoryField | null>(null)

  console.log(data)

  const activeSubCategoryData = getActiveSubCategoryData()

  useLayoutEffect(() => {
    setData(templatesData[selectedTemplate])
  }, [selectedTemplate])

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

  const updateField: UpdateField = (path, value) => {
    setData(set({ ...data }, path, value))
  }

  const value = {
    selectedTemplate,
    data,
    setData,
    activeCategory,
    setActiveCategory,
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
