import { NavLink } from '../NavLink'
import { footerNavLinks } from '@/consts'
import { FC } from 'react'

export const FooterNav: FC = () => {
  return (
    <nav>
      <ul className='grid grid-cols-2 gap-x-24 gap-y-3'>
        {footerNavLinks.map((link) => (
          <li key={link}>
            <NavLink to={`/${link}`}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
