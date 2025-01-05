import { type TemplateNames } from '@/types'
import { type TemplateContextValues } from '@/types/contexts'
import { createContext, PropsWithChildren, useState } from 'react'

export const TemplateContext = createContext<TemplateContextValues | null>(null)

export const TemplateContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateNames>('classic')

  const value = {
    selectedTemplate,
    setSelectedTemplate
  }

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}
