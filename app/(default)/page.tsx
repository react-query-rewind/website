export const metadata = {
  title: 'Home - Neon',
  description: 'Page description',
}

import Hero from '@/components/hero'
import PressLogos from '@/components/press-logos'
import Features from '@/components/features'
import Introduction from '@/components/introduction'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Resources from '@/components/resources'
import Cta from '@/components/cta'
import GettingStarted from '@/components/getting-started'

export default function Home() {
  return (
    <>
      <Hero />
      <PressLogos />
      <Features />
      <Introduction />
      <GettingStarted/>
      {/* <Pricing />
      <Testimonials /> */}
      {/* <Resources /> */}
      <Cta />
    </>
  )
}
