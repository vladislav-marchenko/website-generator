import { Button } from '../Button'
import { Card } from './Card'
import { pricingCards } from '@/consts'
import { cn } from '@/lib/utils'
import { FC } from 'react'

export const PricingCard: FC<{ currentIndex: number }> = ({ currentIndex }) => {
  const { label, price, oldPrice, features, button } =
    pricingCards[currentIndex]

  return (
    <Card className='w-80'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-center'>{label}</h4>
        <div className='flex flex-col text-center text-4xl font-bold tracking-wider'>
          {oldPrice && (
            <span className='text-nowrap line-through decoration-red-500'>
              {oldPrice} sol
            </span>
          )}
          <span
            className={cn('text-nowrap', oldPrice && 'text-lg text-red-500')}
          >
            {price} sol
          </span>
        </div>
        <ul className='flex list-inside list-disc flex-col gap-4'>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Button to={button.href} className='mt-4 w-full py-2'>
          {button.label}
        </Button>
      </div>
    </Card>
  )
}
