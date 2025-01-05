import { Home } from '@/pages/Home'
import { Website } from '@/pages/Website'
import { getSubdomain } from '@/utils'

const subdomain = getSubdomain()

export const Main = () => {
  if (subdomain) {
    return <Website />
  }

  return <Home />
}
