import { TemplateNames } from '.'
import { Dispatch, SetStateAction } from 'react'

export interface TemplateContextValues {
  selectedTemplate: TemplateNames
  setSelectedTemplate: Dispatch<SetStateAction<TemplateNames>>
}
