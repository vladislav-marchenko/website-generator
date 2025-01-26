import { TemplateContext } from '@/contexts/TemplateContext'
import { getSubdomain } from '@/lib/utils'
import { getWebsite } from '@/services/api'
import { TemplateContextValues } from '@/types/contexts'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'

const subdomain = getSubdomain()

export const useTemplateData = () => {
  const {
    data: templateEditorData,
    updateField,
    selectedTemplate
  } = useContext(TemplateContext) as TemplateContextValues

  const { data: fetchedData } = useQuery({
    queryKey: ['templateData'],
    queryFn: () => {
      return getWebsite(subdomain as string)
    },
    enabled: !!subdomain
  })

  return {
    templateName: subdomain ? fetchedData?.template : selectedTemplate,
    data: subdomain ? fetchedData?.data : templateEditorData,
    updateField: subdomain ? null : updateField
  }
}
