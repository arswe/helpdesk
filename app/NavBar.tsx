'use client'

import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes'
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
    <nav className='border-b-2  mb-5 px-5 py-3'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='5'>
            <Link href='/' className='font-bold text-xl italic '>
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
          </Flex>
          <Box>
            {status === 'authenticated' && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback='?'
                    size='2'
                    radius='full'
                    className='cursor-pointer'
                    referrerPolicy='no-referrer'
                  />
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size='2'>{session.user!.name!}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Label>
                    <Text size='2'>{session.user!.email!}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>
                    <Link href='/api/auth/signout'>Sign out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === 'unauthenticated' && <Link href='/api/auth/signin'> Sign in </Link>}
          </Box>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar
