import Image from 'next/image'
import HomeScreen from '@/components/homescreen'
import About from '@/components/about'
import Features from '@/components/features'
import Instructor from '@/components/instructor'
import Contact from '@/components/contact'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <main>
      <HomeScreen />
      <About />
      <Features />
      <Testimonial />
      <Instructor />
      <Contact />
    </main>
  )
}
