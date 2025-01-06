import { NavLink } from '../NavLink'
import { PROJECT_NAME } from '@/consts'
import { FC } from 'react'

export const FooterCopyrights: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex items-center justify-between'>
      <span>
        {currentYear} {PROJECT_NAME}. All rights reserved.
      </span>
      <div className='flex items-center gap-4'>
        <NavLink to='/terms'>Terms</NavLink>
        <NavLink to='/privacy'>Privacy</NavLink>
      </div>
    </div>
  )
}
