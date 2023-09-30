import React from 'react'
import HeroImage from '../../Components/HeroImage'
import CustomerTest from '../../Components/CustomerTest'
import Gallery from '../../Components/Gallery'
import CallToAction from '../../Components/CallToAction'

const Home = () => {
  return (
    <div>
        <HeroImage />
        <CustomerTest />
        <Gallery />
        <CallToAction />
    </div>
  )
}

export default Home