import Jupiter from '@/assets/jupiter.png'
import Phantom from '@/assets/phantom.jpeg'
import Raydium from '@/assets/raydium.png'
import Solana from '@/assets/solana.png'
import { Text } from '@/components/TemplateItems/Text'

const howToBuyCards = [
  {
    name: 'firstStep',
    images: [Phantom]
  },
  {
    name: 'secondStep',
    images: [Solana]
  },
  {
    name: 'thirdStep',
    images: [Raydium, Jupiter]
  }
]

export const ClassicHowToBuy = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-16'>
      <h2 className='tracking-wide'>How to Buy</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {howToBuyCards.map(({ name, images }, index) => (
          <div
            key={name}
            className='flex max-w-72 flex-col justify-between gap-8 rounded-xl bg-white p-4 text-black'
          >
            <div className='flex flex-col gap-2'>
              <h3 className='text-3xl'>Step {index + 1}</h3>
              <Text as='p' fieldName={name} />
            </div>
            <div className='flex items-center gap-4'>
              {images.map((image) => (
                <img
                  key={image}
                  src={image}
                  className='h-16 w-16 rounded-xl bg-black'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
