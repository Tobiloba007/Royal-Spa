import React from 'react'
import About from './About/About'
import Announcement from './Announcement/Announcement'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'

const AboutUs = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <About />
        <Services />
        <Footer />
    </div>
  )
}

export default AboutUs