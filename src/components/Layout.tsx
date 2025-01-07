import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='flex h-full flex-col'>
      <Header />
      <main className='h-full min-h-screen flex-auto overflow-x-hidden'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
