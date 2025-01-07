import { Description } from '@/components/Description'
import { PricingCard } from '@/components/Pricing/PricingCard'
import { Section } from '@/components/Sections/Section'
import { pricingCards } from '@/consts'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'

export const animationStyles =
  'transition-all group-data-[animate=out]:invisible group-data-[animate]:duration-500 group-data-[animate=in]:animate-in group-data-[animate=out]:animate-out group-data-[animate=in]:fade-in group-data-[animate=out]:fade-out'

export const Pricing = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const { title, description } = pricingCards[selectedCardIndex]

  const ref = useRef<HTMLDivElement | null>(null)

  const nextCard = () => {
    ref.current?.setAttribute('data-animate', 'out')

    setTimeout(() => {
      ref.current?.setAttribute('data-animate', 'in')

      if (selectedCardIndex < pricingCards.length - 1) {
        return setSelectedCardIndex(selectedCardIndex + 1)
      }

      setSelectedCardIndex(0)
    }, 499)
  }

  return (
    <Section className='flex items-center'>
      <div
        ref={ref}
        className='group container flex h-full items-center gap-12'
      >
        <div
          className={cn(
            'flex flex-col gap-4 group-data-[animate=in]:slide-in-from-bottom group-data-[animate=out]:slide-out-to-bottom',
            animationStyles
          )}
        >
          <h2 className='capitalize'>{title}</h2>
          <Description className='max-w-[600px]'>{description}</Description>
        </div>
        <PricingCard
          selectedCardIndex={selectedCardIndex}
          nextCard={nextCard}
        />
      </div>
    </Section>
  )
}
