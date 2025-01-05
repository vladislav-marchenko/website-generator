import { Header } from '@/components/Header'
import { FAQSection } from '@/components/Sections/FAQSection'
import { FeaturesSection } from '@/components/Sections/FeaturesSection'
import { HeroSection } from '@/components/Sections/HeroSection'
import { LaunchSection } from '@/components/Sections/LaunchSection'

export const Home = () => {
  return (
    <div className='flex h-full flex-col'>
      <Header />
      <main className='flex-auto flex flex-col h-full'>
        <HeroSection />
        <LaunchSection />
        <FeaturesSection />
        <FAQSection />
      </main>
    </div>
  )
}
