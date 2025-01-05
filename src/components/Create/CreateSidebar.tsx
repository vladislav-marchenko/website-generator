import { CreateSidebarThemesSelector } from './CreateSidebarThemesSelector'
import { TemplateContext } from '@/contexts/TemplateContext'
import { templateDefaultValues, templateSchema } from '@/forms'
import { templates } from '@/templates'
import { TemplateContextValues } from '@/types/contexts'
import { TemplateFormValues } from '@/types/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const CreateSidebar: FC = () => {
  const { name } = useParams()
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const form = useForm<TemplateFormValues>({
    resolver: zodResolver(templateSchema),
    defaultValues: templateDefaultValues
  })

  const onSubmit = (data: TemplateFormValues) => {
    console.log('submit', data)
  }

  return (
    <aside className='w-1/4 min-w-64 max-w-xs bg-neutral-200 p-4'>
      Website name: {name}
      <CreateSidebarThemesSelector />
      <hr className='my-2 border-neutral-400' />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        {templates[selectedTemplate].categories.map((category) => (
          <div key={category.label}>
            <h3 className='font-semibold'>{category.label}</h3>
            <div className='flex flex-col gap-2'>
              {category.fields.map((field) => (
                <div key={field.label}>
                  <label htmlFor={field.label}>{field.label}</label>
                  <input id={field.name} {...form.register(field.name)} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <input type='submit' />
      </form>
    </aside>
  )
}
