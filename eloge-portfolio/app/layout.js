import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eloge Next.js App',
  description: 'Created with Next.js',
}
export default function RootLayout({children,}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  )
}
