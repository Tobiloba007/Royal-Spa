import React from 'react'
import './services.css'
import { MenuItems } from '../../MenuItems'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='s-wrapper'
    initial={{x : '300vw'}}
    animate={{x : 0}}
    transition={{duration : 2}}
    >
       <div className="s-title">
        <h6 className='s-h6'>ROYAL SKINCARE</h6>
        <h2 className='s-h2'>Spa Services</h2>
        <p className='s-text'>Experience an extensive menu of both modern and timeless treatments</p>
       </div>

       <div className='s-bottom'>
       {MenuItems.map((item) => {
        return(
       <div className="s-menu-list">
              <img className="s-img" src={item.image} alt="body massage" />     
             <h5 className='s-menu-item'>{item.service}</h5>
       </div>
       )})}
       </div>
       <div className='s-btn'>
      <button className='s-menu-btn'><Link className='s-link' to="/services">SEE OUR SPA MENU</Link></button>
       </div>
    </motion.div>
  )
}

export default Services