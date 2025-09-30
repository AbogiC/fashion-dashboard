import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Luxe Fashion - Premium Fashion Store',
  description: 'Discover luxury fashion collections and timeless elegance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}