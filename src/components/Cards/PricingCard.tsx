import { Button } from '../Button'
import { Card } from './Card'
import { pricingCards } from '@/consts'
import { FC } from 'react'

export const PricingCard: FC<{ currentIndex: number }> = ({ currentIndex }) => {
  const { title, price, button } = pricingCards[currentIndex]

  return (
    <Card className='w-80'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-center'>{title}</h4>
        <span className='text-nowrap text-center text-4xl font-bold tracking-wider'>
          {price} sol
        </span>
        <ul className='flex list-inside list-disc flex-col gap-4'>
          <li>Some benefit</li>
          <li>Some benefit</li>
          <li>Some benefit</li>
          <li>Some benefit</li>
          <li>Some benefit</li>
        </ul>
        <Button to={button.href} className='mt-4 w-full py-2'>
          {button.label}
        </Button>
      </div>
    </Card>
  )
}
