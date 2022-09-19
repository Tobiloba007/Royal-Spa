import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div className='ab-wrapper'
    initial={{x : '-250vw'}}
    animate={{x : 0}}
    transition={{duration : 7}}
    >
      <div className="ab-top">
         <h6>ROYAL SKINCARE</h6>
         <h3>Why Choose Us ?</h3>
      </div>
      <div className='ab-bottom'>
        <img className='ab-img' src="https://images.unsplash.com/photo-1620733719521-fa0625956f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className='ab-message'>
            <h3 className='title-font'>ROYAL SKIN CARE SPA</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            <button className='a-btn'><Link className='a-link' to="/contact">CONTACT US NOW</Link></button>
        </div>
      </div>
    </motion.div>
  )
}

export default About