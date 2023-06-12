import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App!!!',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About this site</Link></li>
            <li><Link href="/about/me">About me</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
