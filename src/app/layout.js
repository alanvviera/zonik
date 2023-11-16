import { Inter, Narnoor } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Banner from './components/Banner'
import Special from './components/Special'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZONIK',
  description: 'ART ENTITY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-black' >
      
      <body className={inter.className}>
        <Navbar ></Navbar>
       

        {children}
        <Footer></Footer>
        </body>
        
    </html>
  )
}
