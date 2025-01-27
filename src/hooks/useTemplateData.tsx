import { TemplateContext } from '@/contexts/TemplateContext'
import { getSubdomain } from '@/lib/utils'
import { getWebsite } from '@/services/api'
import { TemplateContextValues } from '@/types/contexts'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'

const subdomain = getSubdomain()

export const useTemplateData = () => {
  const { data: fetchedData, isLoading } = useQuery({
    queryKey: ['templateData'],
    queryFn: async () => {
      return getWebsite(subdomain as string)
    },
    enabled: !!subdomain
  })

  const {
    data: templateEditorData,
    updateField,
    selectedTemplate
  } = useContext(TemplateContext) as TemplateContextValues

  return {
    data: subdomain ? fetchedData?.data : templateEditorData,
    isLoading,
    templateName: subdomain ? fetchedData?.template : selectedTemplate,
    updateField: subdomain ? null : updateField
  }
}
