import { Badge } from '../Badge'
import { Description } from '../Description'
import { Section } from './Section'
import { featuresCards } from '@/consts'

export const FeaturesSection = () => {
  return (
    <Section className='flex flex-col items-center gap-12 justify-center'>
      <div className='flex flex-col gap-4 text-center justify-center items-center'>
        <Badge>Features</Badge>
        <h3 className='text-4xl font-bold'>Everything You Need</h3>
        <Description>
          Launch your memecoin website with powerful features
        </Description>
      </div>
      <div className='flex gap-4'>
        {featuresCards.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className='flex flex-col gap-4 p-6 border-2 border-neutral-400 rounded-xl'
          >
            <div className='p-3 bg-black text-white dark:bg-white dark:text-black rounded-xl max-w-max'>
              <Icon size={28} />
            </div>
            <h4 className='text-xl font-bold'>{title}</h4>
            <Description className='max-w-xs'>{description}</Description>
          </div>
        ))}
      </div>
    </Section>
  )
}
