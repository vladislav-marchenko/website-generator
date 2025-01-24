import { Card } from '../Cards/Card'
import { Button } from '../ui/button'

export const AllUserWebsites = () => {
  return (
    <ul className='flex w-full flex-col gap-4'>
      <li className='w-full'>
        <Card className='flex w-full flex-row items-center justify-between gap-4 p-4'>
          <div className='flex items-center gap-4'>
            <div className='h-12 w-12 rounded-full bg-neutral-500' />
            <h4>Website name</h4>
          </div>
          <div className='flex items-center gap-4'>
            <Button>Edit</Button>
            <Button>Domain transfer</Button>
            <Button>Change domain</Button>
            <Button variant='destructive'>Remove</Button>
          </div>
        </Card>
      </li>
    </ul>
  )
}
