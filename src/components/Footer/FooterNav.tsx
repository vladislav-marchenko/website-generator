import { NavLink } from '../NavLink'
import { footerNavLinks } from '@/consts'
import { FC } from 'react'

export const FooterNav: FC = () => {
  return (
    <nav>
      <ul className='grid grid-cols-2 gap-x-24 gap-y-3'>
        {footerNavLinks.map(({ label, value }) => (
          <li key={value}>
            <NavLink to={`/${value}`}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
