import { Card } from '../Cards/Card'
import { Button } from '../ui/button'
import { ChangeDomain } from './ChangeDomain'
import { DeleteWebsite } from './DeleteWebsite'
import { FC } from 'react'

interface WebsitesItemsProps {
  name: string
  template: string
}

export const WebsitesItem: FC<WebsitesItemsProps> = ({ name, template }) => {
  return (
    <li className='w-full'>
      <Card className='flex w-full flex-row items-center justify-between gap-4 p-4'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-full bg-neutral-500' />
          <div className='flex flex-col'>
            <h4 className='text-2xl leading-none'>{name}</h4>
            <span className='text-sm text-neutral-400'>{template}</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Button>Edit</Button>
          {/* <Button>Domain transfer</Button> */}
          <ChangeDomain name={name} />
          <DeleteWebsite name={name} />
        </div>
      </Card>
    </li>
  )
}
