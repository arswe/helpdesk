'use client'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='font-bold text-xl italic '>
      <span className='text-red-500 hover:text-red-600'>HELP</span> DESK
    </Link>
  )
}

export default Logo
