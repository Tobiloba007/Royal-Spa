import React from 'react'
import About from './About/About'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <About />
        <Services />
        <Footer />
    </div>
  )
}

export default AboutUs