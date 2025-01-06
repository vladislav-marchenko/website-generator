import { Badge } from '../Badge'
import { Description } from '../Description'
import { Section } from './Section'
import { featuresCards } from '@/consts'
import { useTranslation } from 'react-i18next'

export const FeaturesSection = () => {
  const { t } = useTranslation()

  return (
    <Section
      id='features'
      className='flex flex-col items-center justify-center gap-12'
    >
      <div className='container flex flex-col items-center justify-center gap-4 text-center'>
        <Badge>{t('features.badge')}</Badge>
        <h3>{t('features.title')}</h3>
        <Description>{t('features.description')}</Description>
      </div>
      <div className='flex gap-4'>
        {featuresCards.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className='flex flex-col gap-4 rounded-xl border-2 border-neutral-200 p-6 dark:border-neutral-500'
          >
            <div className='max-w-max rounded-xl bg-black p-3 text-white dark:bg-white dark:text-black'>
              <Icon size={28} />
            </div>
            <h4>{title}</h4>
            <Description className='max-w-xs'>{description}</Description>
          </div>
        ))}
      </div>
    </Section>
  )
}
