import { FAQSection } from '@/components/Sections/FAQSection'
import { FeaturesSection } from '@/components/Sections/FeaturesSection'
import { HeroSection } from '@/components/Sections/HeroSection'
import { LaunchSection } from '@/components/Sections/LaunchSection'

export const Home = () => {
  return (
    <div className='flex h-full flex-col'>
      <HeroSection />
      <LaunchSection />
      <FeaturesSection />
      <FAQSection />
    </div>
  )
}
