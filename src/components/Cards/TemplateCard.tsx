import { Button } from '../Button'
import { Description } from '../Description'
import { templateCards } from '@/consts'
import { Check } from 'lucide-react'
import { FC } from 'react'

export const TemplateCard: FC<{ currentIndex: number }> = ({
  currentIndex
}) => {
  const { name, title, shortDescription, features } =
    templateCards[currentIndex]

  return (
    <div className='flex min-h-24 w-[400px] flex-col gap-4 rounded-2xl bg-neutral-700 p-8'>
      <div className='group h-48 overflow-hidden rounded-md'>
        <img
          className='object-cover object-top group-hover:animate-scroll'
          src='https://www.buidl.co.in/_next/image?url=%2Ftemplates%2Fmodern.png&w=1920&q=75'
        />
      </div>
      <h4>{title}</h4>
      <Description>{shortDescription}</Description>
      <ul className='flex flex-col gap-1'>
        {features.map((feature) => (
          <li className='flex items-center gap-2'>
            <Check size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button to={`/create/${name}`}>Select</Button>
    </div>
  )
}
