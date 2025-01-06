import { cn } from '@/lib/utils'
import { useState } from 'react'

const cards = [
  {
    title: 'standard',
    price: 0.045
  },
  {
    title: 'premium',
    price: 0.25
  }
]

export const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(cards[0].title)

  const nextCard = (currentIndex: number) => {
    const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1
    setSelectedCard(cards[nextIndex].title)
  }

  return (
    <div className='flex h-full items-center justify-center'>
      <div className='relative'>
        {cards.map(({ title, price }, index) => (
          <div
            key={title}
            className={cn(
              'absolute left-0 top-0 rounded-md bg-neutral-600 p-4 transition-all duration-500',
              {
                'invisible animate-out fade-out slide-out-to-right slide-out-to-top':
                  selectedCard !== title
              }
            )}
          >
            <div>
              <h3>{title}</h3>
              <span>${price}</span>
            </div>
            {selectedCard === title && (
              <button
                onClick={() => nextCard(index)}
                className='mt-4 rounded bg-blue-500 p-2 text-white'
              >
                Next
              </button>
            )}
          </div>
        ))}
      </div>
      <div className='mt-4'>Current: {selectedCard}</div>
    </div>
  )
}
