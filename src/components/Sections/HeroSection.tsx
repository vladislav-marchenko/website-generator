import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { Section } from './Section'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <Section className='flex items-center justify-center flex-col'>
      <div className='flex flex-col items-center justify-center flex-auto text-center'>
        <Badge>AURORA - Memecoin Website Generator</Badge>
        <h1 className='uppercase text-8xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[18.7rem] font-black select-none leading-normal'>
          Aurora
        </h1>
        <h2 className='py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight'>
          No code, no hassle, just moonlight magic
        </h2>
        <Description className='my-6'>
          Forget the boring details. Choose a wild template, brand it with your
          coin’s name, and get ready to soar.
        </Description>
        <div className='flex gap-4 items-center'>
          <Button to='/dashboard'>Go to Dashboard</Button>
          <Button to='/howto' variant='outline'>
            How to start
          </Button>
        </div>
      </div>
      <Link to='/#' className='flex flex-col items-center animate-bounce'>
        <span className='text-sm'>Scroll to explore</span>
        <IoIosArrowDown size={24} />
      </Link>
    </Section>
  )
}
