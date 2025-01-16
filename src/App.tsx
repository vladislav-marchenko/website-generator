import { Layout } from './components/Layout'
import { TemplateContextProvider } from './contexts/TemplateContext'
import { ThemeContext } from './contexts/ThemeContext'
import { Create } from './pages/Create'
import { Pricing } from './pages/Pricing'
import { Templates } from './pages/Templates'
import { ThemeContextValues } from './types/contexts'
import { Main } from '@/pages/Main'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const { theme } = useContext(ThemeContext) as ThemeContextValues

  return (
    <div className={theme}>
      <div className='dark:bg-neutral-900 dark:text-white'>
        <Routes>
          <Route
            path='/create/:template'
            element={
              <TemplateContextProvider>
                <Create />
              </TemplateContextProvider>
            }
          />
          <Route path='/' element={<Main />} />
          <Route element={<Layout />}>
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/templates' element={<Templates />} />
          </Route>
          <Route path='/dashboard' element={<Main />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
