'use client'
import Skeleton from '@/app/components/Skeleton'
import { Avatar, Box, DropdownMenu, Text } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const AuthStatus = () => {
  const { status, data: session } = useSession()
  if (status === 'loading') return <Skeleton width='3rem' />
  if (status === 'unauthenticated')
    return (
      <Link className='nav-link' href='/api/auth/signin'>
        Sign in
      </Link>
    )
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback='?'
            size='2'
            radius='full'
            className='cursor-pointer'
            referrerPolicy='no-referrer'
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size='2'>{session!.user!.name!}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Label>
            <Text size='2'>{session!.user!.email!}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link href='/api/auth/signout'>Sign out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  )
}

export default AuthStatus
