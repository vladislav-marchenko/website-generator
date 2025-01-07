import { Button } from '@/components/Button'
import { Description } from '@/components/Description'
import { PricingCard } from '@/components/Pricing/PricingCard'
import { Section } from '@/components/Sections/Section'
import { pricingCards } from '@/consts'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export const animationStyles =
  'transition-all group-data-[animation=out]:invisible group-data-[animation]:duration-500 group-data-[animation=in]:animate-in group-data-[animation=out]:animate-out group-data-[animation=in]:fade-in group-data-[animation=out]:fade-out'

export const Pricing = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const { title, description } = pricingCards[selectedCardIndex]

  const [animation, setAnimation] = useState<'in' | 'out' | null>(null)

  const nextCard = () => {
    if (animation) return

    setAnimation('out')

    setTimeout(() => {
      setAnimation('in')

      if (selectedCardIndex < pricingCards.length - 1) {
        return setSelectedCardIndex(selectedCardIndex + 1)
      }

      setSelectedCardIndex(0)
    }, 450)

    setTimeout(() => setAnimation(null), 900)
  }

  return (
    <Section className='flex items-center'>
      <div
        data-animation={animation}
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
          <PricingCard selectedCardIndex={selectedCardIndex} />
          <Button onClick={nextCard} className='p-3'>
            <IoIosArrowForward size={28} />
          </Button>
        </div>
      </div>
    </Section>
  )
}
