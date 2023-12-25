import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import './globals.css'
import './theme-config.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Helpdesk Issue Tracker',
  description: 'A simple issue tracker for your helpdesk',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Theme appearance='dark' accentColor='sky' grayColor='sage' panelBackground='solid' radius='small'>
          <NavBar />
          <main className='p-5'>{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
