import { Description } from '../Description'
import { featuresCardIcons } from '@/consts'
import { FC } from 'react'

interface FeaturesCardProps {
  title: string
  description: string
  iconName: string
}

export const FeaturesCard: FC<FeaturesCardProps> = ({
  title,
  description,
  iconName
}) => {
  const Icon = featuresCardIcons[iconName as keyof typeof featuresCardIcons]

  return (
    <div className='flex flex-col gap-4 rounded-xl border-2 border-neutral-200 p-6 dark:border-neutral-500'>
      <div className='max-w-max rounded-xl bg-black p-3 text-white dark:bg-white dark:text-black'>
        <Icon size={28} />
      </div>
      <h4>{title}</h4>
      <Description className='max-w-xs'>{description}</Description>
    </div>
  )
}
