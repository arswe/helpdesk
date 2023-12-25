import Link from 'next/link'

const NavBar = () => {
  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues', label: 'Issues' },
  ]

  return (
    <nav className='flex space-x-6 border-b-2 mb-5 px-5 h-14 items-center'>
      <Link href='/' className='font-bold text-lg italic '>
        <span className='text-red-500 hover:text-red-600'>HELP</span> DESK
      </Link>

      <ul className='flex space-x-6'>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className='text-zinc-500 hover:text-zinc-900 transition-colors'>
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
