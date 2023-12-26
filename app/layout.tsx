import { Container, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import AuthProvider from './auth/Provider'
import './globals.css'
import './theme-config.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Helpdesk Tracker',
  description: 'A simple issue tracker for your helpdesk',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <AuthProvider>
          <Theme appearance='dark' accentColor='sky'>
            <NavBar />
            <main className='p-5'>
              <Container>{children}</Container>
            </main>
            {/* <ThemePanel /> */}
          </Theme>
        </AuthProvider>
      </body>
    </html>
  )
}
