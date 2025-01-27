import { BASE_URL, GOOGLE_API_BASE_URL } from '@/consts'
import {
  CreateWebsiteFn,
  ErrorResponse,
  GetFontsResponse,
  GetWebsiteFn,
  GetUserWebsitesFn,
  Website,
  DeleteWebsiteFn,
  UpdateWebsite
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
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey },
    body: JSON.stringify({ template: templateName, data: templateData })
  })
  const data: Website | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const getWebsite: GetWebsiteFn = async (name: string) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url)
  const data: Website | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const getUserWebsites: GetUserWebsitesFn = async (publicKey: string) => {
  const url = `${BASE_URL}/websites`
  const response = await fetch(url, { headers: { 'Public-Key': publicKey } })
  const data: Website[] | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website[]
}

export const updateWebsite: UpdateWebsite = async ({
  currentName,
  newName,
  data: templateData,
  publicKey
}) => {
  const url = `${BASE_URL}/websites/${currentName}`
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Public-Key': publicKey },
    body: JSON.stringify({ name: newName, data: templateData })
  })
  const data: Website | ErrorResponse = await response.json()

  if (!response.ok) handleError(data as ErrorResponse)
  return data as Website
}

export const deleteWebsite: DeleteWebsiteFn = async ({ name, publicKey }) => {
  const url = `${BASE_URL}/websites/${name}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Public-Key': publicKey }
  })

  if (!response.ok) {
    const data: ErrorResponse = await response.json()
    handleError(data)
  }
}
