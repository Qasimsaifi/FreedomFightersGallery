import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Freedom Fighters Gallery',
  description: "Honoring the Heroes of our Nation's Struggle",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-700'>{children}</body>
    </html>
  )
}
