'use client'

import { Box } from '@radix-ui/themes'
import claassnames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const currentPath = usePathname()
  const { status, data: session } = useSession()

  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues/list', label: 'Issues' },
  ]

  return (
    <nav className='flex space-x-6 border-b-2  mb-5 px-5 h-14 items-center'>
      <Link href='/' className='font-bold text-lg italic '>
        <span className='text-red-500 hover:text-red-600'>HELP</span> DESK
      </Link>

      <ul className='flex space-x-6'>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={claassnames({
                'text-emerald-300': href === currentPath,
                'text-emerald-500': href !== currentPath,
                'hover:text-emerald-800 transition-colors': true,
              })}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Box>
        {status === 'authenticated' && <Link href='/api/auth/singout'> Sing out </Link>}
        {status === 'unauthenticated' && <Link href='/api/auth/signin'> Sign in </Link>}
      </Box>
    </nav>
  )
}

export default NavBar
