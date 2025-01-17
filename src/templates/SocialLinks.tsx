import { Link } from '@/components/TemplateItems/Link'
import { TemplateData } from '@/types'
import { FC } from 'react'

export const SocialLinks: FC<{ data: TemplateData }> = ({ data }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
      {Object.keys(data.links).map((key) => {
        return (
          data.links[key].url && <Link key={key} data={data} fieldName={key} />
        )
      })}
    </div>
  )
}
