import React from 'react'
import './services.css'
import MenuItems from '../../MenuItems'
import {saveAs} from 'file-saver';
// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import spaMenu from '../../resources/Spamenu.jpg'

const Services = () => {

  const downloadImg = () => {
    saveAs(spaMenu, 'spaMenu.jpg');
  };

  return (
    <motion.div className='s-wrapper'
    initial={{x : '100vw'}}
    animate={{x : 0}}
    transition={{duration : 2}}
    >
       <div className="s-title">
        <h6 className='s-h6'>ROYAL TREAT SPA</h6>
        <h2 className='s-h2'>Spa Services</h2>
        <p className='s-text'>Experience an extensive menu of both modern and timeless treatments</p>
       </div>

       <div className='s-bottom'>
       {MenuItems.map((item) => {
        return(
       <div className="s-menu-list">
              <img className="s-img" src={item.image} alt="body massage" />     
             <h5 className='s-menu-item' >{item.service}</h5>
              <p className='s-menu-price'>{item.price}</p>
       </div>
       )})}
       </div>
       <div className='s-btn'>
      <button className='s-menu-btn' onClick={downloadImg}>
      SEE OUR SPA MENU</button>
       </div>
    </motion.div>
  )
}

export default Services