import Image from 'next/image'
import ReactQueryRewindComponent from 'public/images/ReactQueryRewindComponent.png'
import DevTool from 'public/images/DevTool.png'
import Illustration from '@/public/images/features-illustration.svg'

export default function GettingStarted() {
  return (
    <section className="relative" id='get-started'>
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
            <h2 className="h2 font-uncut-sans mb-4">Getting Started</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">React Query Rewind's Easy Set-Up</p>
            </div>
          </div>
          {/* NPM Section */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="zoom-out" data-aos-delay="200">
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4">Install the NPM Package</h3>
                <p className="text-xl text-gray-400 mb-6">Package located <a target='_blank' className='hover:text-blue-500' href={"https://www.npmjs.com/package/react-query-rewind"}>here</a></p>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Install ReactQueryRewind as a dev dependency with <span className="font-mono bg-gray-800 text-white py-2 px-4 rounded-md shadow">npm i -D reactqueryrewind</span></span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Import the ReactQueryRewind component into the same file where your QueryClientProvider is initialized</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Place the ReactQueryRewind component inside your QueryClientProvider</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="zoom-out">
              <Image className="mx-auto md:max-w-none" src={ReactQueryRewindComponent} width={540} height={581} alt="Features" />
            </div>
          </div>

          {/* Breaks */}
          <br />
          {/* Chrome Extension content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="zoom-out" data-aos-delay="200">
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4">Install the Chrome Extension</h3>
                <p className="text-xl text-gray-400 mb-6">Download the extension <a className='hover:text-blue-500' target='_blank' href={"https://chromewebstore.google.com/detail/rqrewind/jfljppnfglpckkgkpmdpgagnffloboel"}>here</a></p>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Open the Dev Tools</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Find the <span className='italic'>React Query Rewind</span> tab</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="zoom-out">
              <Image className="mx-auto md:max-w-none" src={DevTool} width={540} height={581} alt="Features" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}