import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {FaInstagram, FaFacebookSquare, FaTwitterSquare, FaWhatsapp} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.div className="fwrapper"
    initial={{y : 400}}
    animate={{y : 0}}
    transition={{duration : 15}}
    >
    <div className='f-container'>

        <div className="f-links-con">
              <h6>LINKS</h6>
            <div className="f-links">
            <p className='f-item'><Link className='f-link' to="/">HOME</Link></p>
            <p className='f-item'><Link className='f-link' to="/services">SERVICES</Link></p>
            <p className='f-item'><Link className='f-link' to="/about">ABOUT US</Link></p>
            <p className='f-item'><Link className='f-link' to="/pictures">GALLERY</Link></p>
            <p className='f-item'><Link className='f-link' to="/contact">CONTACT</Link></p>
            </div>
        </div>

        <div className="f-contact">
             <h6>CONTACTS</h6>
            <div className="f-phone">09090529118</div>
            <div className="f-address">No 11, Ajanlekoko, tuale, Lagos Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        </div>

        <div className="f-socials">
            <p className='f-soc-icon'><Link to="/"><FaInstagram fontSize="35px" color='purple' /></Link></p>
            <p className='f-soc-icon'><Link to="/"><FaFacebookSquare fontSize="35px" color='Blue' /></Link></p>
            <p className='f-soc-icon'><Link to="/"><FaTwitterSquare fontSize="35px" color='teal' /></Link></p>
            <p className='f-soc-icon'><Link to="/"><FaWhatsapp fontSize="35px" color='green' /></Link></p>
        </div>
    </div>
    <div className="f-copyright">
    Copyright © 2021 The Mobile Spa | All Rights Reserved.
    </div>
    </motion.div>
  )
}

export default Footer