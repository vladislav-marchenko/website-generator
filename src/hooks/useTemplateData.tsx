import { TemplateContext } from '@/contexts/TemplateContext'
import { getSubdomain } from '@/lib/utils'
import { getWebsite } from '@/services/api'
import { TemplateContextValues } from '@/types/contexts'
import { useQuery } from '@tanstack/react-query'
import { useContext, useLayoutEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const subdomain = getSubdomain()

export const useTemplateData = () => {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''

  const isExist = !!subdomain || pathname === '/edit'

  const {
    data: templateEditorData,
    setData: setTemplateEditorData,
    updateField,
    selectedTemplate
  } = useContext(TemplateContext) as TemplateContextValues

  const {
    data: fetchedData,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['templateData'],
    queryFn: async () => {
      return getWebsite((subdomain as string) || name)
    },
    enabled: isExist
  })

  useLayoutEffect(() => {
    if (isSuccess) setTemplateEditorData(fetchedData.data)
  }, [isSuccess])

  return {
    data: subdomain ? fetchedData?.data : templateEditorData,
    isLoading,
    templateName: subdomain ? fetchedData?.template : selectedTemplate,
    updateField: subdomain ? null : updateField
  }
}
