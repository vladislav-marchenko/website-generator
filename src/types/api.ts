import { TemplateData } from './templates'

interface Font {
  family: string
}

export interface GetFontsResponse {
  items?: Font[]
  error?: { message: string }
}

export interface CreateWebsiteResponse {
  name: string
  data: TemplateData
  creator: string
}

export type CreateWebsiteFn = ({
  name,
  templateData,
  publicKey
}: {
  name: string
  templateData: TemplateData
  publicKey: string
}) => Promise<CreateWebsiteResponse>
