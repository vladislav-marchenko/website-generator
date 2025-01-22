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
    <div className='flex w-full items-center justify-between gap-2 border-b border-neutral-700 px-4 py-6'>
      <Button
        onClick={onClick}
        variant='ghost'
        className='flex items-center gap-4 text-base'
      >
        <MoveLeft />
        <span>{buttonLabel}</span>
      </Button>
      {title && (
        <div className='relative min-w-48 rounded-md border border-neutral-200 px-4 py-2 dark:border-neutral-800'>
          <span className='absolute right-4 top-0 inline-block -translate-y-1/2 bg-white p-px text-[10px] dark:bg-neutral-900'>
            Section
          </span>
          {title}
        </div>
      )}
    </div>
  )
}
