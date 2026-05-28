import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Products from '@/components/sections/Products'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Clients from '@/components/sections/Clients'
import Careers from '@/components/sections/Careers'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <FeaturedWork />
      <Products />
      <Services />
      <Testimonials />
      <Clients />
      <Careers />
      <Footer />
    </main>
  )
}