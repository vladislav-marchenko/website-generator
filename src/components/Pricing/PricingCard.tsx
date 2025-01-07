import { Button } from '../Button'
import { pricingCards } from '@/consts'
import { cn } from '@/lib/utils'
import { animationStyles } from '@/pages/Pricing'
import { FC } from 'react'

interface PricingCardProps {
  selectedCardIndex: number
  nextCard: () => void
}

export const PricingCard: FC<PricingCardProps> = ({
  selectedCardIndex,
  nextCard
}) => {
  const { title, price } = pricingCards[selectedCardIndex]

  return (
    <div
      className={cn(
        'min-w-80 rounded-2xl bg-neutral-700 p-8 group-data-[animate=in]:slide-in-from-top group-data-[animate=out]:slide-out-to-top',
        animationStyles
      )}
    >
      <div className='flex flex-col gap-4'>
        <h4 className='text-center capitalize'>{title}</h4>
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
        <Button onClick={nextCard} className='mt-4 w-full py-2'>
          Next plan
        </Button>
      </div>
    </div>
  )
}
