import Image from 'next/image'

import Hero from '../components/Layout/Hero'
import HomeMenu from '../components/Layout/HomeMenu'
import SectionHeaders from '../components/Layout/SectionHeaders'


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu/>
      <section className='text-center my-16'>
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About Us'}/>
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t Hesitate'} mainHeader={'Contact Us'}/>
        <div className='mt-8'>
          <a className="text-4xl underline text-grey-500" href="tel:+46590403030">
            +46 590 403 030
          </a>
        </div>
      </section>
      
    </>
  )
}
