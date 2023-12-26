'use client'
import claassnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const currentPath = usePathname()

  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues/list', label: 'Issues' },
  ]
  return (
    <ul className='flex space-x-6'>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={claassnames({
              'nav-link': true,
              '!text-emerald-300': href === currentPath,
            })}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
