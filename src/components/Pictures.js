import React from 'react'
import Announcement from './Announcement/Announcement'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import Navbar from './Navbar/Navbar'

const Pictures = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Gallery />
        <Footer />
    </div>
  )
}

export default Pictures