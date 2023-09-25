import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStatePovider } from '../globalState/GlobalStateProvider'
import NoiseContainer from '../components/common/NoiseContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalStatePovider>
      <html lang="en" className=''>
        <body className={clsx("bg-skin-default relative min-h-screen", inter.className)}>
          <NoiseContainer>
            {children}
          </NoiseContainer>
        </body>
      </html>
    </GlobalStatePovider>
  )
}
