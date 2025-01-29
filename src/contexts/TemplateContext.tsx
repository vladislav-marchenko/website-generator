import { Loading } from '@/components/Loading'
import { getSubdomain } from '@/lib/utils'
import { getWebsite } from '@/services/api'
import { templatesData } from '@/templates'
import { UpdateField } from '@/types'
import { TemplateContextValues } from '@/types/contexts'
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

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
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

  useLayoutEffect(() => {
    if (isExist) return
    setData(initialData.data)
  }, [isExist, initialData])

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
    enabled: isExist && !isCreator
  })

  const fetchedTemplate = fetchedData && (fetchedData.template as TemplateName)

  useLayoutEffect(() => {
    if (isSuccess && isExist) setData(fetchedData.data)
  }, [isFetching])

  const updateField: UpdateField = useCallback((path, value) => {
    setData((data) => set({ ...data }, path, value))
  }, [])

  if (isFetching) {
    return (
      <div className='flex h-dvh w-full items-center justify-center'>
        <Loading size={48} />
      </div>
    )
  }

  const value = {
    data,
    setData,
    updateField: isCreator || isEditor ? updateField : null,
    selectedTemplate:
      isExist && fetchedTemplate ? fetchedTemplate : selectedTemplate
  }

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}
