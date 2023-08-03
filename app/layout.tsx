import Navbar from '@/components/nav'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import BottomBar from '@/components/BottomBar'
import Logo from '@/components/logo'


const inter = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'ScienoMath',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' overflow-x-hidden scroll-smooth'>
      {/* <div>
        <Logo />
      </div> */}
      <div className='opacity-0 md:opacity-100'>
        <Navbar />
      </div>
      <body className={inter.className}>{children}</body>
      <div className='md:hidden'>
        <BottomBar />
      </div>
    </html>
  )
}
