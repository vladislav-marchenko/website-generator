import { templatesData } from '@/templates'
import { UpdateField } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
import { TemplateName } from '@/types/templates'
import { set } from 'lodash'
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useState
} from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()
  const template = searchParams.get('template')

  if (pathname === '/create' && !templatesData.hasOwnProperty(template ?? '')) {
    return <Navigate to='/templates' />
  }

  const selectedTemplate = template as TemplateName
  const [data, setData] = useState(templatesData[selectedTemplate])

  useLayoutEffect(() => {
    const newData = templatesData[selectedTemplate]
    if (data === newData) return

    setData(newData)
  }, [templatesData, selectedTemplate])

  const updateField: UpdateField = useCallback((path, value) => {
    setData((data) => set({ ...data }, path, value))
  }, [])

  return (
    <TemplateContext.Provider
      value={{
        data,
        updateField,
        selectedTemplate
      }}
    >
      {children}
    </TemplateContext.Provider>
  )
}
