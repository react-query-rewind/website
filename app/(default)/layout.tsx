'use client'

import { useEffect, useState } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDesktop, setisDesktop] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    })

    const handleResize = () => {
      setisDesktop(window.innerWidth > 800);
    }

    // check initial screen size and handle for different sizes
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Header isDesktop={isDesktop} />
      
      <main className="grow">

        {children}

      </main>
    </>
  )
}
