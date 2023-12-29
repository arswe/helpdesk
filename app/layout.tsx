import { Container, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import QueryClientProvider from './QueryClientProvider'
import AuthProvider from './auth/Provider'
import './globals.css'
import './theme-config.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'HelpDesk application',
  description: 'this is a Issue creeted by HelpDesk application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme appearance='dark' accentColor='sky' panelBackground='solid' radius='none'>
              <NavBar />
              <main>
                <Container p='5'>{children}</Container>
              </main>
              {/* <ThemePanel /> */}
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
