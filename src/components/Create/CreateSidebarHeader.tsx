import { Badge } from '../Badge'
import { Button } from '../ui/button'
import { MoveLeft } from 'lucide-react'
import { FC, MouseEvent } from 'react'

interface CreateSidebarHeaderProps {
  title?: string
  buttonLabel?: string
  onClick: (e: MouseEvent) => void
}

export const CreateSidebarHeader: FC<CreateSidebarHeaderProps> = ({
  title,
  buttonLabel = 'Back',
  onClick
}) => {
  return (
    <div className='sticky top-0 z-10 flex w-full items-center justify-between gap-2 border-b border-neutral-700 bg-neutral-900/70 px-4 py-6 backdrop-blur-md'>
      <Button
        onClick={onClick}
        variant='ghost'
        className='flex items-center gap-4 text-base'
      >
        <MoveLeft />
        <span>{buttonLabel}</span>
      </Button>
      {title && <Badge>{title}</Badge>}
    </div>
  )
}
