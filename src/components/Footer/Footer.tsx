import { FooterCopyrights } from './FooterCopyrights'
import { FooterItem } from './FooterItem'
import { FooterNav } from './FooterNav'
import { FooterSocials } from './FooterSocials'
import { PROJECT_NAME } from '@/consts'
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className='container flex flex-col py-12 text-sm'>
      <div className='flex justify-between gap-8'>
        <FooterItem title={PROJECT_NAME}>
          <p>
            Generate professional memecoin websites quickly and effortlessly.
            Join thousands of creators building the future of memecoins.
          </p>
        </FooterItem>
        <FooterItem title='Navigation'>
          <FooterNav />
        </FooterItem>
        <FooterItem title='Connect'>
          <FooterSocials />
        </FooterItem>
      </div>
      <hr className='my-8 w-full border-neutral-200 dark:border-neutral-600' />
      <FooterCopyrights />
    </footer>
  )
}
