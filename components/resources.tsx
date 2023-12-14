'use client'

import { useState } from 'react';
import Image from 'next/image';
import AustinImage from '@/public/images/austin.png';
import EmmaImage from '@/public/images/emma.png';
import JohnImage from '@/public/images/john.png';
import RuiImage from '@/public/images/rui.png';

export default function Resources() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div id="team" className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
  <h2 className="h2 font-uncut-sans">Meet the Team</h2>
</div>
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-6 sm:gap-y-8 items-start">
              <div
  className={`block relative p-6 group ${!['1', '3', '4'].includes(category) && 'hidden'}`}
  style={{ textAlign: 'center' }}
>
  <div className="flex items-center flex-col">
    <Image
      className="mx-auto h-40 w-40 rounded-full mb-4"
      src={AustinImage}
      alt="Austin's Image"
    />
    <div className="font-uncut-sans text-xl text-gray-100 font-semibold">Austin Cavanagh</div>
    <div className="font-uncut-sans text-m text-gray-100 font-semibold">Software Engineer</div>

    <div className="flex items-center mt-2">
      <a href="https://github.com/austin-cavanagh">
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 mr-2 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
          <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7+.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z" fillRule="nonzero" />
          </svg>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/austincavanagh/">
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
          <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>
              <div
  className={`block relative p-6 group ${!['1', '3', '4'].includes(category) && 'hidden'}`}
  style={{ textAlign: 'center' }}
>
<div className="flex items-center flex-col">
  <Image
    className="mx-auto h-40 w-40 rounded-full mb-4"
    src={EmmaImage}
    alt="Emma's Image"
  />
  <div className="font-uncut-sans text-xl text-gray-100 font-semibold">Emma Teering</div>
  <div className="font-uncut-sans text-m text-gray-100 font-semibold">Software Engineer</div>

  <div className="flex items-center mt-2">
    <a href="https://github.com/eteering">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 mr-2 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
        <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7+.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z" fillRule="nonzero" />
        </svg>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/emma-teering/">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
        <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  </div>
  </div>
</div>
              <div
  className={`block relative p-6 group text-center ${!['1', '3', '4'].includes(category) && 'hidden'}`}
>
<div className="flex items-center flex-col">
  <Image
    className="mx-auto h-40 w-40 rounded-full mb-4"
    src={JohnImage}
    alt="John's Image"
  />
  <div className="font-uncut-sans text-xl text-gray-100 font-semibold">John Dunn</div>
  <div className="font-uncut-sans text-m text-gray-100 font-semibold">Software Engineer</div>

  <div className="flex items-center mt-2">
    <a href="https://github.com/johnwdunn20">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 mr-2 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
        <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7+.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z" fillRule="nonzero" />
        </svg>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/johnwdunn/">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
        <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  </div>
  </div>
</div>
              <div
  className={`block relative p-6 group text-center ${!['1', '3', '4'].includes(category) && 'hidden'}`}
>
<div className="flex items-center flex-col">
  <Image
    className="mx-auto h-40 w-40 rounded-full mb-4"
    src={RuiImage}
    alt="Rui's Image"
  />
  <div className="font-uncut-sans text-xl text-gray-100 font-semibold">Rui Fan</div>
  <div className="font-uncut-sans text-m text-gray-100 font-semibold">Software Engineer</div>
  <div className="flex items-center mt-2">
    <a href="https://github.com/ruifan-IU">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 mr-2 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
        <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7+.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z" fillRule="nonzero" />
        </svg>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/rui-fan-868231299">
      <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
        <svg className="fill-blue-500 hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  </div>
  </div>
</div>

            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}