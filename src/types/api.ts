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

export type Website = {
  name: string
  template: string
  data: TemplateData
  creator: string
}

export type CreateWebsiteResponse = Website | ErrorResponse
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
}) => Promise<Website>

export type GetWebsiteResponse = Website | ErrorResponse
export type GetWebsiteFn = (name: string) => Promise<Website>

export type GetUserWebsitesResponse = Website[] | ErrorResponse
export type GetUserWebsitesFn = (publicKey: string) => Promise<Website[]>

export type DeleteWebsiteFn = ({
  name,
  publicKey
}: {
  name: string
  publicKey: string
}) => Promise<void>
