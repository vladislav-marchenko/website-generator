import { Card } from '../Cards/Card'
import { Button } from '../ui/button'
import { DeleteWebsite } from './DeleteWebsite'
import { Website } from '@/types/api'
import { FC } from 'react'

export const Websites: FC<{ data: Website[] }> = ({ data }) => {
  return (
    <ul className='flex w-full flex-col gap-4'>
      {data.map(({ name, template }) => (
        <li key={name} className='w-full'>
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
              <Button>Domain transfer</Button>
              <Button>Change domain</Button>
              <DeleteWebsite name={name} />
            </div>
          </Card>
        </li>
      ))}
    </ul>
  )
}
