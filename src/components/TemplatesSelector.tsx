import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { templates } from '@/templates'
import { TemplateName } from '@/types/templates'
import { useSearchParams } from 'react-router-dom'

export const TemplatesSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedTemplate = searchParams.get('template')

  const selectTemplate = (templateName: TemplateName) => {
    if (selectedTemplate === templateName) return
    setSearchParams({ template: templateName })
  }

  return (
    <div className='flex flex-col gap-4 p-4'>
      {Object.keys(templates).map((templateName) => (
        <div
          key={templateName}
          onClick={() => selectTemplate(templateName as TemplateName)}
          className='flex justify-between gap-4'
        >
          <span className='font-arial-black'>
            {templates[templateName as TemplateName].label}
          </span>
          <Button
            className={cn('transition-colors duration-300', {
              'dark:bg-neutral-500 dark:text-white dark:hover:bg-neutral-400':
                templateName !== selectedTemplate
            })}
          >
            {selectedTemplate === templateName ? 'Selected' : 'Select'}
          </Button>
        </div>
      ))}
    </div>
  )
}
