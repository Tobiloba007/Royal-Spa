import React from 'react'
import About from './About/About'
import Announcement from './Announcement/Announcement'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import Intro from './Intro/Intro'
import OffCanvasExample from './Navbar/Navbar'
import Reviews from './Reviews/Reviews'
import Services from './Services/Services'

const Home = () => {
  return (
    <div>
        <Announcement />
        <OffCanvasExample />
        <Intro />
        <Services />
        <About />
        <Gallery />
        <Reviews />
        <Footer />
    </div>
  )
}

export default Home