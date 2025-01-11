import { GOOGLE_API_BASE_URL } from '@/consts'
import { Font } from '@/types/api'

interface getFontsResponse {
  items?: Font[]
  error?: { message: string }
}

export const getFonts = async (): Promise<Pick<getFontsResponse, 'items'>> => {
  const url = `${GOOGLE_API_BASE_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  const data: getFontsResponse = await fetch(url).then((res) => res.json())

  if (data.error) {
    throw data.error.message
  }

  return data
}
