import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div className='n-wrapper'
    initial={{y : -250, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{delay: 0.2, type : "tween"}}
    >
       <div className="n-logo">ROYAL SKINCARE SPA</div>
       <div className="n-nav">
       <Link className='n-link' to="/">HOME</Link>
       <Link className='n-link' to="/about">ABOUT</Link>
       <Link className='n-link' to="/pictures">GALLERY</Link>
       <Link className='n-link' to="/contact">CONTACT US</Link>
       </div>
    </motion.div>
   
  )
}

export default Navbar