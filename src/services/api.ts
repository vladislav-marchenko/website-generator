import { GOOGLE_API_BASE_URL } from '@/consts'
import { Font } from '@/types/api'

export const getFonts = async (): Promise<{ items: Font[] }> => {
  const url = `${GOOGLE_API_BASE_URL}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  return fetch(url).then((res) => res.json())
}
