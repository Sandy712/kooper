import './globals.css'
import { Inter, Fuggles } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import MyNavbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })
const fuggles = Fuggles({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyNavbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
