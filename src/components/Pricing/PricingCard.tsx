import { Button } from '../Button'
import { pricingCards } from '@/consts'
import { cn } from '@/lib/utils'
import { animationStyles } from '@/pages/Pricing'
import { FC } from 'react'

export const PricingCard: FC<{ selectedCardIndex: number }> = ({
  selectedCardIndex
}) => {
  const { title, price, button } = pricingCards[selectedCardIndex]

  return (
    <div
      className={cn(
        'group-data-[animation-direction=right]:slide-out-from-right group-data-[animation-direction=right]:slide-out-from-right min-w-80 rounded-2xl bg-neutral-200 p-8 repeat-1 group-data-[animation-direction=left]:slide-in-from-left group-data-[animation-direction=left]:slide-out-to-right group-data-[animation-direction=right]:slide-in-from-right group-data-[animation-direction=right]:slide-out-to-left dark:bg-neutral-700',
        animationStyles
      )}
    >
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
    </div>
  )
}
