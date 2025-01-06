import { Customize } from './Icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu'
import { languages } from '@/consts'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

export const CustomizeMenu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextValues

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Customize className='dark:fill-white' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-34'>
        <DropdownMenuItem onClick={toggleTheme} className='flex gap-2'>
          <span>Theme</span>
          {theme === 'dark' && <IoSunnyOutline size={22} />}
          {theme === 'light' && <IoMoonOutline size={22} />}
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Language</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {languages.map(({ label, icon: Icon }) => (
                <DropdownMenuItem key={label}>
                  <Icon size={22} />
                  <span>{label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
