import { getSubdomain } from '@/lib/utils'
import { getWebsite } from '@/services/api'
import { templatesData } from '@/templates'
import { UpdateField } from '@/types'
import { TemplateData, TemplateName } from '@/types/templates'
import { useQuery } from '@tanstack/react-query'
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

const subdomain = getSubdomain()

export const NewContext = createContext(null)

export const NewContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''
  const template = searchParams.get('template')

  const { pathname } = useLocation()
  const isEditor = pathname === '/edit'
  const isCreator = pathname === '/create'

  if (isCreator && !templatesData.hasOwnProperty(template ?? '')) {
    return <Navigate to='/templates' />
  }

  if (isEditor && !templatesData.hasOwnProperty(template ?? '')) {
    return <Navigate to='/account' />
  }

  const selectedTemplate = template as TemplateName
  const isExist = !!subdomain || isEditor

  const initialData = {
    template: selectedTemplate,
    data: templatesData[selectedTemplate],
    name,
    creator: ''
  }

  const [data, setData] = useState<TemplateData>(initialData.data)

  const {
    data: fetchedData,
    isLoading,
    isSuccess,
    isFetching
  } = useQuery({
    queryKey: ['templateData'],
    queryFn: async () => {
      return getWebsite((subdomain as string) || name)
    },
    enabled: isExist,
    initialData
  })

  useLayoutEffect(() => {
    if (isSuccess) setData(fetchedData.data)
  }, [isFetching])

  const updateField: UpdateField = useCallback((path, value) => {
    setData((data) => set({ ...data }, path, value))
  }, [])

  if (isLoading) {
    return <span>loading...</span>
  }

  const value = {
    data,
    setData,
    updateField,
    selectedTemplate
  }

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>
}
