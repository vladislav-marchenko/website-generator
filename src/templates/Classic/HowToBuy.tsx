import Jupiter from '@/assets/jupiter.png'
import Phantom from '@/assets/phantom.jpeg'
import Raydium from '@/assets/raydium.png'
import Solana from '@/assets/solana.png'

const howToBuyCards = [
  {
    description:
      'Mobile Users: Download the Phantom app for free. Desktop Users: Download the Phantom chrome extension ',
    images: [Phantom]
  },
  {
    description:
      'Fund your wallet with Solana, you can buy Solana from an exchange or cross chain swap and send it to your wallet.',
    images: [Solana]
  },
  {
    description: 'Go to Raydium or Jupiter and swap your Solana for $Runaway',
    images: [Raydium, Jupiter]
  }
]

export const ClassicHowToBuy = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-16'>
      <h2 className='tracking-wide'>How to Buy</h2>
      <div className='flex gap-4'>
        {howToBuyCards.map(({ description, images }, index) => (
          <div className='flex max-w-72 flex-col justify-between gap-8 rounded-xl bg-white p-4 text-black'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-3xl'>Step {index + 1}</h3>
              <p className='text-center text-lg font-medium'>{description}</p>
            </div>
            <div className='flex items-center gap-4'>
              {images.map((image) => (
                <img src={image} className='h-16 w-16 rounded-xl bg-black' />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
