export const metadata = {
  title: 'React Query Rewind',
  description: 'Time travel React Query state with React Query Rewind, an easy to use debugging tool designed to improve development velocity',
}

import Hero from '@/components/hero'
import ViewState from '@/components/viewState'
import Introduction from '@/components/introduction'
import Team from '@/components/team'
import GettingStarted from '@/components/getting-started'
import ViewDiff from '@/components/viewDiff'
import TimeTravel from '@/components/timeTravel'
import ComponentTree from '@/components/componentTree'

export default function Home() {
  return (
    <>
    <div className="flex flex-col"></div>
      <Hero />
      <ViewState />
      <ViewDiff/>
      <TimeTravel/>
      <ComponentTree/>
      <Introduction />
      <GettingStarted/>
      <Team />
    </>
  )
}
