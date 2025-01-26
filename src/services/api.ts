import { BASE_URL, GOOGLE_API_BASE_URL } from '@/consts'
import {
  CreateWebsiteFn,
  CreateWebsiteResponse,
  GetFontsResponse,
  GetWebsiteFn,
  GetWebsiteResponse
} from '@/types/api'

export const getFonts = async (): Promise<Pick<GetFontsResponse, 'items'>> => {
  const url = `${GOOGLE_API_BASE_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  const data: GetFontsResponse = await fetch(url).then((res) => res.json())

  if (data.error) {
    throw data.error.message
  }

  return data
}

export const createWebsite: CreateWebsiteFn = async ({
  name,
  templateName,
  templateData,
  publicKey
}) => {
  const url = `${BASE_URL}/websites/create/${name}`

  const data: CreateWebsiteResponse = await fetch(url, {
    body: JSON.stringify({ template: templateName, data: templateData }),
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey }
  }).then((res) => res.json())

  return data
}

export const getWebsite: GetWebsiteFn = async (name: string) => {
  const url = `${BASE_URL}/websites/${name}`
  const data: GetWebsiteResponse = await fetch(url).then((res) => res.json())

  return data
}
