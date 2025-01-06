import { Button } from '../Button'
import { Description } from '../Description'
import { FancyButton } from '../FancyButton'
import { Section } from './Section'
import { PROJECT_NAME } from '@/consts'
import { IoIosArrowDown } from 'react-icons/io'

export const HeroSection = () => {
  return (
    <Section
      id='hero'
      className='flex flex-col items-center justify-center gap-8 pt-[69px]'
    >
      <div className='flex flex-auto flex-col items-center justify-center text-center'>
        <h1 className='select-none text-8xl font-black uppercase leading-normal sm:text-7xl md:text-8xl lg:text-9xl xl:text-[18.7rem]'>
          {PROJECT_NAME}
        </h1>
        <h2 className='py-2 xl:text-5xl'>
          No code, no hassle, just moonlight magic
        </h2>
        <Description className='my-6'>
          Forget the boring details. Choose a wild template, brand it with your
          coin’s name, and get ready to soar.
        </Description>
        <div className='flex items-center gap-4'>
          <FancyButton to='/dashboard'>Go to Dashboard</FancyButton>
          <Button to='/howto' variant='outline'>
            How to start
          </Button>
        </div>
      </div>
      <a href='/#launch' className='flex animate-bounce flex-col items-center'>
        <span className='text-sm'>Scroll to explore</span>
        <IoIosArrowDown size={24} />
      </a>
    </Section>
  )
}
