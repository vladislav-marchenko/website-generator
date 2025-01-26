import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Link } from '@/components/TemplateItems/Link'
import { useTemplateData } from '@/hooks/useTemplateData'
import { cn } from '@/lib/utils'
import { FC } from 'react'

export const SocialLinks: FC<{ className?: string }> = ({ className }) => {
  const { data } = useTemplateData()
  if (!data) return <TemplateItemError />

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-4',
        className
      )}
    >
      {Object.keys(data.links).map((key) => {
        return data.links[key].url && <Link key={key} fieldName={key} />
      })}
    </div>
  )
}
