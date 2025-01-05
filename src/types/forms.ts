import { templateSchema } from '@/forms'
import { z } from 'zod'

export type TemplateFormValues = z.infer<typeof templateSchema>
