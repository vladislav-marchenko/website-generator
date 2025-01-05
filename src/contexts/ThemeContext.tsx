import { ThemeContextValues } from '@/types/contexts'
import { FC, ReactNode, createContext, useState } from 'react'

export const ThemeContext = createContext<ThemeContextValues | null>(null)

const getTheme = () => {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return 'light'
}

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(getTheme())

  const changeTheme = (theme: 'dark' | 'light') => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
