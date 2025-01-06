import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { Section } from './Section'

export const LaunchSection = () => {
  return (
    <Section
      id='launch'
      className='flex items-center justify-center bg-neutral-100 dark:bg-neutral-800'
    >
      <div className='container flex items-center justify-between gap-8'>
        <div className='flex flex-col gap-4'>
          <Badge>Fast. Professional. Powerful.</Badge>
          <h2>Launch Your Solana Project in Minutes</h2>
          <Description className='max-w-[600px]'>
            Create stunning, feature-rich websites for your Solana projects with
            zero coding. Stand out in the competitive crypto space.
          </Description>
          <div className='flex items-center gap-4'>
            <Button>Start Building</Button>
            <Button href='/#features' variant='outline'>
              Explore Features
            </Button>
          </div>
        </div>
        <div className='flex h-96 w-[1000px] flex-auto items-center justify-center rounded-md bg-neutral-400'>
          Video placeholder
        </div>
      </div>
    </Section>
  )
}
