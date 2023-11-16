import Image from 'next/image'
import Background from './components/Background'
import Banner from './components/Banner'
import Special from './components/Special'
import OurTeam from './components/OurTeam'
import Reviews from './components/Reviews'



export default function Home() {
  return (
    <main className='grid grid-cols-1'>
      <Banner/>
      <Special/>
      <OurTeam/>
      <Reviews/>
      
    </main>
  )
}
