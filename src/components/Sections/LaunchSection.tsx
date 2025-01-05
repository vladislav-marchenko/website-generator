import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { Section } from './Section'

export const LaunchSection = () => {
  return (
    <Section
      id='launch'
      className='flex justify-center items-center bg-neutral-100 dark:bg-neutral-800'
    >
      <div className='flex justify-between items-center gap-8 max-w-6xl w-full mx-auto'>
        <div className='flex flex-col gap-4'>
          <Badge>Fast. Professional. Powerful.</Badge>
          <h2 className='font-bold tracking-tighter sm:text-5xl xl:text-6xl'>
            Launch Your Solana Project in Minutes
          </h2>
          <Description className='max-w-[600px]'>
            Create stunning, feature-rich websites for your Solana projects with
            zero coding. Stand out in the competitive crypto space.
          </Description>
          <div className='flex gap-4 items-center'>
            <Button>Start Building</Button>
            <Button variant='outline'>Explore Features</Button>
          </div>
        </div>
        <div className='flex items-center justify-center flex-auto h-96 bg-neutral-400 rounded-md w-[1000px]'>
          Video placeholder
        </div>
      </div>
    </Section>
  )
}
