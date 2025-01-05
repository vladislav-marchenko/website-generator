import { Badge } from '../Badge'
import { Description } from '../Description'
import { Section } from './Section'

const cards = [
  {
    title: 'Professional Templates',
    description:
      'Choose from our collection of modern, responsive designs crafted specifically for memecoins. Each template is optimized for conversion and engagement.'
  },
  {
    title: 'Easy Customization',
    description:
      'Personalize your website with our intuitive editor. Change colors, content, and layout with just a few clicks - no coding required.'
  },
  {
    title: 'Instant Preview',
    description:
      'Preview your website changes in real-time as you make them. Perfect your design before sharing it with your community.'
  }
]

export const FeaturesSection = () => {
  return (
    <Section className='flex items-center justify-center'>
      <div className='flex flex-col gap-4 text-center justify-center items-center'>
        <Badge>Features</Badge>
        <h3 className='text-4xl font-bold'>Everything You Need</h3>
        <Description>
          Launch your memecoin website with powerful features
        </Description>
      </div>
    </Section>
  )
}
