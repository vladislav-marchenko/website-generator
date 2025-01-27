import { Badge } from '../Badge'
import { Button } from '../Button'
import { Description } from '../Description'
import { WebsiteNameInput } from '../WebsiteNameInput'
import { Section } from './Section'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const LaunchSection = () => {
  const [name, setName] = useState('')

  const navigate = useNavigate()
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
          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate(`/templates?name=${name}`)
            }}
            className='flex items-center gap-4'
          >
            <WebsiteNameInput value={name} setValue={setName} />
            <Button type='submit'>{t('launch.startBuildingButton')}</Button>
          </form>
        </div>
        <div className='flex h-96 w-[1000px] flex-auto items-center justify-center rounded-md bg-neutral-400'>
          Video placeholder
        </div>
      </div>
    </Section>
  )
}
