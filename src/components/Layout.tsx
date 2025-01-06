import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='flex h-full flex-col'>
      <Header />
      <main className='h-full min-h-screen flex-auto pt-[85px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
