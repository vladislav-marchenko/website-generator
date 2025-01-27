import { BASE_URL, GOOGLE_API_BASE_URL } from '@/consts'
import {
  CreateWebsiteFn,
  CreateWebsiteResponse,
  ErrorResponse,
  GetFontsResponse,
  GetWebsiteFn,
  GetWebsiteResponse,
  GetUserWebsitesResponse,
  GetUserWebsitesFn,
  Website,
  DeleteWebsiteFn
} from '@/types/api'

const handleError = (data: ErrorResponse) => {
  if (typeof data.message === 'string') {
    throw new Error(data.message)
  } else {
    throw new Error(data.message[0])
  }
}

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

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const getWebsite: GetWebsiteFn = async (name: string) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url)
  const data: GetWebsiteResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const getUserWebsites: GetUserWebsitesFn = async (publicKey: string) => {
  const url = `${BASE_URL}/websites`
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey }
  })
  const data: GetUserWebsitesResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website[]
}

export const deleteWebsite: DeleteWebsiteFn = async ({ name, publicKey }) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey }
  })

  if (!response.ok) {
    const data = await response.json()
    handleError(data as ErrorResponse)
  }
}
