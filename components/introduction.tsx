import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/features-illustration.svg'
import logo from '@/public/images/logo.png'
import { log } from 'console'

export default function Introduction() {
  return (
    <section className="relative">
      {/* Bg gradient */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      {/* Bg illustration */}
      <div className="absolute top-0 left-1/2 -z-10 ml-[390px]" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">React Query Rewind</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">React Query Rewind is a powerful DevTool for time-traveling state changes. This open-source extension is tailored to improve debugging applications built with React Query</p>
              <br />
              <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
                <p className="text-xl text-gray-200 italic hover:text-blue-500"><a target='_blank'  href='https://github.com/oslabs-beta/react-query-rewind/tree/main'>View the full React Query Rewind docs</a></p>
                <p className="text-xl text-gray-200 italic hover:text-blue-500"><a href='https://tanstack.com/query/v3/docs/react/overview' target='_blank'>View the full React Query docs</a></p>
              </div>
            </div>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="zoom-out" data-aos-delay="200">
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4">Improve Development Velocity</h3>
                <p className="text-xl text-gray-400 mb-6">React Query is a powerful yet easy-to-use tool to manage server state. However, it's dev tools were fairly limited. Until now</p>
                <p className="text-xl text-gray-400 mb-6">Use React Query Rewind to:</p>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>View state changes over time</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>View the difference in state over time</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Visualize your component hierarchy</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Image */}
            {/* <div className="md:w-5/12 lg:w-1/2" data-aos="zoom-out">
              <Image className="mx-auto md:max-w-none" src={logo} width={540} height={581} alt="Features" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}