import './css/style.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const uncutsans = localFont({
  src: [
    {
      path: '../public/fonts/Uncut-Sans-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Uncut-Sans-Semibold.woff2',
      weight: '600',
    }, 
    {
      path: '../public/fonts/Uncut-Sans-Bold.woff2',
      weight: '700',
    }, 
    {
      path: '../public/fonts/Uncut-Sans-BoldOblique.woff2',
      weight: '700',
      style: 'italic'
    },          
  ],
  variable: '--font-uncut-sans',
  display: 'swap',  
})

export const metadata = {
  title: 'React Query Rewind',
  description: 'Tool for debugging apps built with React Query',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.variable} ${uncutsans.variable} font-inter antialiased bg-gray-900 text-gray-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
