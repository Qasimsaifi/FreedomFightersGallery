import FreedomFighterGallery from '@/components/freedomeFighterGallery'
import Image from 'next/image'
import freedomFightersData from './data/fightersData'
import Hero from '@/components/HeroSection'


export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <FreedomFighterGallery freedomFighters={freedomFightersData}/>
    </main>
  )
}
