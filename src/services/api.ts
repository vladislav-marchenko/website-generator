import { BASE_URL, GOOGLE_API_BASE_URL } from '@/consts'
import {
  CreateWebsiteFn,
  CreateWebsiteResponse,
  ErrorResponse,
  GetFontsResponse,
  GetWebsiteFn
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

  const response = await fetch(url, {
    body: JSON.stringify({ template: templateName, data: templateData }),
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey }
  })
  const data: CreateWebsiteResponse = await response.json()

  if (!response.ok) {
    const errorData = data as ErrorResponse

    if (typeof errorData.message === 'string') {
      throw new Error(errorData.message)
    } else {
      throw new Error(errorData.message[0])
    }
  }

  return data
}

export const getWebsite: GetWebsiteFn = async (name: string) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data)
  }

  return data
}
