import { RocketCard } from './Card'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { useTemplateData } from '@/hooks/useTemplateData'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

const items = [
  {
    title: 'Telegram',
    description: 'Join out active community',
    URLFieldName: 'joinTelegram'
  },
  {
    title: 'Twitter',
    description: 'Follow for updates',
    URLFieldName: 'joinTwitter'
  },
  {
    title: 'Discord',
    description: 'Join our server',
    URLFieldName: 'joinDiscord'
  }
]

export const RocketJoin: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  const { data } = useTemplateData()
  if (!data) return

  return (
    <section className='bg-[#0a0a0a]/95 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <Text
          fieldName='joinTitle'
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex w-full flex-wrap justify-center gap-4'>
          {items.map(({ title, description, URLFieldName }) => (
            <a
              href={data.links?.[URLFieldName]?.url}
              key={title}
              target='_blank'
            >
              <RocketCard className='max-w-[370px] flex-auto items-center'>
                <h3>{title}</h3>
                <p className='text-[#c0bfbc]'>{description}</p>
              </RocketCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
