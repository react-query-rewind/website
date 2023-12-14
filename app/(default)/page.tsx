export const metadata = {
  title: 'Home - Neon',
  description: 'Page description',
}

import Hero from '@/components/hero'
//import PressLogos from '@/components/press-logos'
import ViewState from '@/components/viewState'
import Introduction from '@/components/introduction'
// import Pricing from '@/components/pricing'
// import Testimonials from '@/components/testimonials'
import Resources from '@/components/resources'
// import Cta from '@/components/cta'
import GettingStarted from '@/components/getting-started'
import ViewDiff from '@/components/viewDiff'
import TimeTravel from '@/components/timeTravel'
import ComponentTree from '@/components/componentTree'

export default function Home() {
  return (
    <>
    <div className="flex flex-col"></div>
      <Hero />
      {/* <PressLogos /> */}
      <ViewState />
      <ViewDiff/>
      <TimeTravel/>
      <ComponentTree/>
      <Introduction />
      <GettingStarted/>
      {/* <Pricing />
      <Testimonials /> */}
      {/* <Resources /> */}
      {/* <Cta /> */}
    </>
  )
}
