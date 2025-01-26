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
  templateName,
  templateData,
  publicKey
}: {
  name: string
  templateName: string
  templateData: TemplateData
  publicKey: string
}) => Promise<CreateWebsiteResponse>

export interface GetWebsiteResponse {
  name: string
  template: string
  data: TemplateData
  creator: string
}

export type GetWebsiteFn = (name: string) => Promise<GetWebsiteResponse>
