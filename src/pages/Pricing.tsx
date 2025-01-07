import { Button } from '@/components/Button'
import { Description } from '@/components/Description'
import { PricingCard } from '@/components/Pricing/PricingCard'
import { Section } from '@/components/Sections/Section'
import { pricingCards } from '@/consts'
import { useCardsAnimation } from '@/hooks/useCardsAnimation'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const animationStyles =
  'transition-all group-data-[animation=out]:invisible group-data-[animation]:duration-500 group-data-[animation=in]:animate-in group-data-[animation=out]:animate-out group-data-[animation=in]:fade-in group-data-[animation=out]:fade-out'

export const Pricing = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const { title, description } = pricingCards[selectedCardIndex]

  const selectNextCardIndex = () => {
    if (selectedCardIndex < pricingCards.length - 1) {
      return setSelectedCardIndex(selectedCardIndex + 1)
    }

    setSelectedCardIndex(0)
  }

  const {
    animation,
    animationDirection,
    funcs: { previousCard, nextCard }
  } = useCardsAnimation(selectNextCardIndex)

  return (
    <Section className='flex items-center'>
      <div
        data-animation={animation}
        data-animation-direction={animationDirection}
        className='group container flex h-full items-center justify-between gap-8'
      >
        <div
          className={cn(
            'flex flex-col gap-4 group-data-[animation=in]:slide-in-from-bottom group-data-[animation=out]:slide-out-to-bottom',
            animationStyles
          )}
        >
          <h2>{title}</h2>
          <Description className='max-w-[600px]'>{description}</Description>
        </div>
        <div className='flex items-center gap-4'>
          <Button onClick={previousCard} className='z-10 p-3'>
            <IoIosArrowBack size={28} />
          </Button>
          <PricingCard selectedCardIndex={selectedCardIndex} />
          <Button onClick={nextCard} className='z-10 p-3'>
            <IoIosArrowForward size={28} />
          </Button>
        </div>
      </div>
    </Section>
  )
}
