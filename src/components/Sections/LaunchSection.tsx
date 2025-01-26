import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { WebsiteNameInput } from '../WebsiteNameInput'
import { Section } from './Section'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LaunchSection = () => {
  const [name, setName] = useState('')
  const { t } = useTranslation()

  return (
    <Section
      id='launch'
      className='flex items-center justify-center bg-neutral-100 dark:bg-neutral-800'
    >
      <div className='container flex items-center justify-between gap-8'>
        <div className='flex flex-col gap-4'>
          <Badge>{t('launch.badge')}</Badge>
          <h2>{t('launch.title')}</h2>
          <Description className='max-w-[600px]'>
            {t('launch.description')}
          </Description>
          <div className='flex items-center gap-4'>
            <WebsiteNameInput value={name} setValue={setName} />
            <Button to={`/templates?name=${name}`}>
              {t('launch.startBuildingButton')}
            </Button>
          </div>
        </div>
        <div className='flex h-96 w-[1000px] flex-auto items-center justify-center rounded-md bg-neutral-400'>
          Video placeholder
        </div>
      </div>
    </Section>
  )
}
