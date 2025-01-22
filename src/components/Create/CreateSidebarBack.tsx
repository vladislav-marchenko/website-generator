import { Button } from '../ui/button'
import { MoveLeft } from 'lucide-react'
import { FC, MouseEvent } from 'react'

interface CreateSidebarBackProps {
  label?: string
  onClick: (e: MouseEvent) => void
}

export const CreateSidebarBack: FC<CreateSidebarBackProps> = ({
  label = 'Back',
  onClick
}) => {
  return (
    <div className='w-full border-b border-neutral-700 px-4 py-6'>
      <Button
        onClick={onClick}
        variant='ghost'
        className='flex items-center gap-4 text-base'
      >
        <MoveLeft />
        <span>{label}</span>
      </Button>
    </div>
  )
}
