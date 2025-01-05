import { TemplateContext } from '@/contexts/TemplateContext'
import { templates } from '@/templates'
import { type TemplateNames } from '@/types'
import { type TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

const templateNames = Object.keys(templates) as TemplateNames[]

export const CreateSidebarThemesSelector: FC = () => {
  const { selectedTemplate, setSelectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues

  return (
    <div>
      <h2>Themes</h2>
      {templateNames.map((templateName) => (
        <div key={templateName}>
          <span>{templateName}</span>
          <button
            onClick={() => setSelectedTemplate(templateName)}
            className='rounded-md bg-neutral-400 p-1'
          >
            {selectedTemplate === templateName ? 'Selected' : 'Select'}
          </button>
        </div>
      ))}
    </div>
  )
}
