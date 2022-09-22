import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {FaInstagram, FaFacebookSquare, FaTwitterSquare, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {

  return (
    <div className="fwrapper">
    <div className='f-container'>

        <div className="f-links-con">
              <h6>LINKS</h6>
            <div className="f-links">
            <p className='f-item'><Link className='f-link' to="/">HOME</Link></p>
            <p className='f-item'><Link className='f-link' to="/services">SERVICES</Link></p>
            <p className='f-item'><Link className='f-link' to="/about">ABOUT US</Link></p>
            <p className='f-item'><Link className='f-link' to="/pictures">GALLERY</Link></p>
            <p className='f-item'><Link className='f-link' to="/contacts">CONTACT</Link></p>
            </div>
        </div>

        <div className="f-contact">
             <h6>CONTACTS</h6>
            <h5 className="f-phone">0813 809 4256</h5>
            <div className="f-address">Tulip heaven estate chevron lekki, Mayfair roundabout, beside MTN office (the purple and white building opposite Oriolokun) Ile ife.</div>
        </div>

        <div className="f-socials">
            <p className='f-soc-icon'><Link to="/"><FaInstagram fontSize="35px" color='purple' /></Link></p>
            <p className='f-soc-icon'><Link to="/"><FaFacebookSquare fontSize="35px" color='Blue' /></Link></p>
            <p className='f-soc-icon'><Link to="/"><FaTwitterSquare fontSize="35px" color='teal' /></Link></p>
            <p className='f-soc-icon'><Link to="/"><FaWhatsapp fontSize="35px" color='green' /></Link></p>
        </div>
    </div>
    <div className="f-copyright">
    Copyright © 2022 Royal Treat Spa | All Rights Reserved.
    </div>
    </div>
  )
}

export default Footer