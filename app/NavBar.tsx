'use client'

import { Container, Flex } from '@radix-ui/themes'
import AuthStatus from './components/AuthStatus'
import Logo from './components/Logo'
import NavLinks from './components/NavLinks'

const NavBar = () => {
  return (
    <nav className='border-b-2  mb-5 px-5 py-5'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='5'>
            <Logo />
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar
