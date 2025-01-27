import { Layout } from './components/Layout'
import { TemplateContextProvider } from './contexts/TemplateContext'
import { TemplateEditorContextProvider } from './contexts/TemplateEditorContext'
import { Account } from './pages/Account'
import { Create } from './pages/Create'
import { Pricing } from './pages/Pricing'
import { Templates } from './pages/Templates'
import { Main } from '@/pages/Main'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        element={
          <TemplateContextProvider>
            <Outlet />
          </TemplateContextProvider>
        }
      >
        <Route
          path='/create'
          element={
            <TemplateEditorContextProvider>
              <Create />
            </TemplateEditorContextProvider>
          }
        />
        <Route path='/' element={<Main />} />
      </Route>
      <Route path='/account' element={<Account />} />
      <Route element={<Layout />}>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/templates' element={<Templates />} />
      </Route>
      <Route path='/dashboard' element={<Main />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
