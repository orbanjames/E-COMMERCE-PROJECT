import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
//import Slide from '../components/slide'
//import '../components/slide.css'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
