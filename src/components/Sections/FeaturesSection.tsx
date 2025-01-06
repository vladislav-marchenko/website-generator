import { Badge } from '../Badge'
import { Description } from '../Description'
import { FeaturesCards } from '../Features/FeaturesCards'
import { Section } from './Section'
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
      <FeaturesCards />
    </Section>
  )
}
