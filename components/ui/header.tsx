import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/images/logo.png';

export default function Header({ nav = true }: {
  nav?: boolean
}) {
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
          {nav &&
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"href="#feature">Demo</Link>
                <li>
                <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="#team">Team</Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://github.com/oslabs-beta/react-query-rewind">Github</Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://www.npmjs.com/package/react-query-rewind">NPM</Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/signin">Medium</Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://www.linkedin.com/company/react-query-rewind/">LinkedIn</Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
