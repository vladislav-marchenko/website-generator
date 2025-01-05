import { z } from 'zod'

export const templateSchema = z.object({
  projectName: z.string(),
  twitter: z.string(),
  telegram: z.string(),
  logo: z.string(),
  background: z.string(),
  custom: z.string()
})

export const templateDefaultValues = {
  logo: '',
  background: '',
  projectName: '',
  twitter: '',
  telegram: '',
  custom: ''
}
