import { Link } from '@/components/TemplateItems/Link'
import { cn } from '@/lib/utils'
import { TemplateData } from '@/types'
import { FC } from 'react'

interface SocialLinksProps {
  data: TemplateData
  className?: string
}

export const SocialLinks: FC<SocialLinksProps> = ({ data, className }) => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-4',
        className
      )}
    >
      {Object.keys(data.links).map((key) => {
        return (
          data.links[key].url && <Link key={key} data={data} fieldName={key} />
        )
      })}
    </div>
  )
}
