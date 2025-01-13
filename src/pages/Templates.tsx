import { TemplateCard } from '@/components/Cards/TemplateCard'
import { Section } from '@/components/Sections/Section'
import { Slider } from '@/components/Slider'
import { templateCards } from '@/consts'

export const Templates = () => {
  return (
    <Section className='container flex items-center justify-between gap-8'>
      <Slider cards={templateCards} CardElement={TemplateCard} />
    </Section>
  )
}
