import { Inter_Tight, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter_Tight({ subsets: ['latin'] })
const roboto_mono = Roboto_Mono( {subsets: ['latin']});

export const metadata = {
  title: 'Ravan Babayev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#13161B] h-screen flex justify-center items-center">
      {children}
      </body>
    </html>
  )
}
