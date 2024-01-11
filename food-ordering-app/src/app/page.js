import Image from 'next/image'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Layout/Hero'
import HomeMenu from '@/components/Layout/HomeMenu'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu/>
    </>
  )
}
