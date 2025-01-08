import { Button } from '../Button'
import { pricingCards } from '@/consts'
import { FC } from 'react'

export const PricingCard: FC<{ selectedCardIndex: number }> = ({
  selectedCardIndex
}) => {
  const { title, price, button } = pricingCards[selectedCardIndex]

  return (
    <div className='min-w-80 rounded-2xl bg-neutral-200 p-8 duration-300 group-data-[animation=left]:animate-fade-out-left-fade-in-left group-data-[animation=right]:animate-fade-out-right-fade-in-right dark:bg-neutral-700'>
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
