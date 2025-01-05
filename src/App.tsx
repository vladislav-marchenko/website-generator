import { TemplateContextProvider } from './contexts/TemplateContext'
import { Create } from './pages/Create'
import { Main } from '@/pages/Main'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route
        path='/create/:name'
        element={
          <TemplateContextProvider>
            <Create />
          </TemplateContextProvider>
        }
      />
      <Route path='/dashboard' element={<Main />} />
      <Route path='/templates' element={<Main />} />
      <Route path='/pricing' element={<Main />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
