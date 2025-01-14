import { Button } from '@/components/Button'
import { TemplateCard } from '@/components/Cards/TemplateCard'
import { Section } from '@/components/Sections/Section'
import { Slider } from '@/components/Slider'
import { templateCards } from '@/consts'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'

export const Templates = () => {
  const [isSliderView, setIsSliderView] = useState(true)

  return (
    <Section className='container flex flex-col gap-8'>
      <div className='flex justify-between gap-4'>
        <Button to='/' className='flex items-center py-2 text-sm'>
          <ChevronLeft />
          <span>Back to Home</span>
        </Button>
        <Button
          className='flex items-center py-2 text-sm'
          onClick={() => setIsSliderView(!isSliderView)}
        >
          Toggle view ({isSliderView ? 'Grid' : 'Slider'})
        </Button>
      </div>
      {isSliderView && (
        <Slider cards={templateCards} CardElement={TemplateCard} />
      )}
      {!isSliderView && (
        <div className='grid grid-cols-3 gap-12'>
          {templateCards.map((_, index) => (
            <TemplateCard currentIndex={index} />
          ))}
        </div>
      )}
    </Section>
  )
}
