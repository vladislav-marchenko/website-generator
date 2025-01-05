import { Customize } from './Icons'
import { languages } from '@/consts'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu'
import { useContext } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

export const CustomizeMenu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextValues

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Customize size={44} className='dark:fill-white' />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className='bg-neutral-100 p-1.5 mt-2 rounded-md z-20'>
          <DropdownMenuItem
            onClick={toggleTheme}
            className='flex gap-2 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200 hover:outline-none cursor-pointer'
          >
            <span>Theme</span>
            {theme === 'dark' && <IoSunnyOutline size={22} />}
            {theme === 'light' && <IoMoonOutline size={22} />}
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:outline-none'>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex gap-2 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200'>
                Language
              </DropdownMenuTrigger>
              <DropdownMenuPortal>
                <DropdownMenuContent className='flex flex-raw flex-wrap gap-2 bg-neutral-100 p-1.5 mt-2 rounded-md z-20 w-[134px]'>
                  {languages.map(({ label, icon: Icon }) => (
                    <DropdownMenuItem
                      key={label}
                      onClick={() => console.log(label)}
                      className='flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200 hove gap-1 hover:outline-none cursor-pointer'
                    >
                      <Icon className='w-5 h-5 object-fill' />
                      <span>{label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}
