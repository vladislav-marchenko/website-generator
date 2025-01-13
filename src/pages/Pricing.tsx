import { PricingCard } from '@/components/Cards/PricingCard'
import { Section } from '@/components/Sections/Section'
import { Slider } from '@/components/Slider'
import { pricingCards } from '@/consts'

export const Pricing = () => {
  return (
    <Section className='container flex items-center'>
      <Slider cards={pricingCards} CardElement={PricingCard} />
    </Section>
  )
}
