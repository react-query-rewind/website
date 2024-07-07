'use client'

import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/images/logo.png';
import DropDownMenu from '../dropDownMenu';

export default function Header({ isDesktop = true }: {
  isDesktop?: boolean
}) {

  if (isDesktop) {
    return (
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Link href="/" aria-label="Your Site">
                <Image src={LogoImage} alt="Your Site Logo" width={80} height={80} style={{ marginTop: '40px' }} />
              </Link>
            </div>
            {/* Desktop navigation */}
            {isDesktop &&
              <nav className="flex grow">
                <ul className="flex grow justify-end flex-wrap items-center">
                  <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="#demo">Demo</a>
                  </li>
                  <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="#get-started">Get Started</a>
                  </li>
                  <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/#team">Team</a>
                  </li>
                  <li>
                    <p>|</p>
                  </li>
                  <li>
                    <a target='_blank' className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://github.com/oslabs-beta/react-query-rewind">Github</a>
                  </li>
                  {/* <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://www.npmjs.com/package/react-query-rewind">NPM</a>
                  </li> */}
                  <li>
                    <DropDownMenu
                      label='NPM'
                      items={[
                        {
                          name: 'React',
                          link: 'https://www.npmjs.com/package/react-query-rewind'
                        },
                        {
                          name: 'Svelte',
                          link: 'https://www.npmjs.com/package/@react-query-rewind/svelte-query-rewind'
                        },
                        {
                          name: 'Vue',
                          link: 'https://www.npmjs.com/package/@react-query-rewind/vue-query-rewind'
                        }
                      ]}
                    />
                  </li>
                  <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://chromewebstore.google.com/detail/rqrewind/jfljppnfglpckkgkpmdpgagnffloboel">Extension</a>
                  </li>
                  <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://medium.com/@teeringe/react-query-rewind-time-travel-debugging-made-simple-46aaeeafd497">Medium</a>
                  </li>
                  <li>
                    <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://www.linkedin.com/company/react-query-rewind/">LinkedIn</a>
                  </li>
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
    )
  }

  // Mobile
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <nav className="flex grow">
              <ul className="flex grow justify-end flex-wrap items-center ">
                <li className=''>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out mb-0" href="/#demo">Demo</a>
                </li>
                <li className=''>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out mb-0" href="/#get-started">Get Started</a>
                </li>
                <li className=''>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out mb-0" href="/#team">Team</a>
                </li>
              </ul>
            </nav>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" aria-label="Your Site">
              <Image src={LogoImage} alt="React Query Rewind Logo" width={80} height={80} style={{ marginTop: '40px' }} />
            </Link>
          </div>

            <nav className="flex grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                
                <li>
                  <a target='_blank' className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://github.com/oslabs-beta/react-query-rewind">Github</a>
                </li>
                <li>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://www.npmjs.com/package/react-query-rewind">NPM</a>
                </li>
                {/* <li className='py-2'>
                    <DropDownMenu
                      label='NPM'
                      items={[
                        {
                          name: 'React',
                          link: 'https://www.npmjs.com/package/react-query-rewind'
                        },
                        {
                          name: 'Svelte',
                          link: 'https://www.npmjs.com/package/@react-query-rewind/svelte-query-rewind'
                        },
                        {
                          name: 'Vue',
                          link: 'https://www.npmjs.com/package/@react-query-rewind/vue-query-rewind'
                        }
                      ]}
                    />
                </li> */}
                <li>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://chromewebstore.google.com/detail/rqrewind/jfljppnfglpckkgkpmdpgagnffloboel">Extension</a>
                </li>
                <li>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://medium.com/@teeringe/react-query-rewind-time-travel-debugging-made-simple-46aaeeafd497">Medium</a>
                </li>
                <li>
                  <a className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" target='_blank' href="https://www.linkedin.com/company/react-query-rewind/">LinkedIn</a>
                </li>
              </ul>
            </nav>
            
        </div>
      </div>
    </header>
  )
}
