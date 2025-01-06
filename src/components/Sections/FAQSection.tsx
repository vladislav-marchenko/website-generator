import { Description } from '../Description'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import { Section } from './Section'
import { FAQs, PROJECT_NAME } from '@/consts'

export const FAQSection = () => {
  return (
    <Section
      id='FAQ'
      className='flex flex-col justify-center items-center gap-12 bg-neutral-100 dark:bg-neutral-800'
    >
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-4xl font-bold'>Frequently Asked Questions</h3>
        <Description>
          Everything you need to know about {PROJECT_NAME}
        </Description>
      </div>
      <Accordion
        type='single'
        collapsible
        className='flex flex-col gap-4 max-w-7xl w-full'
      >
        {FAQs.map(({ question, answer }) => (
          <AccordionItem key={question} value={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
