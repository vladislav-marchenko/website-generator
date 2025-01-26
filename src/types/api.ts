import { TemplateData } from './templates'

interface Font {
  family: string
}

export interface GetFontsResponse {
  items?: Font[]
  error?: { message: string }
}

export type ErrorResponse = {
  error: string
  message: string | string[]
  statusCode: number
}

export type CreateWebsiteResponse =
  | {
      name: string
      data: TemplateData
      creator: string
    }
  | ErrorResponse

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
