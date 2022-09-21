import React from 'react'
import './about.css'
import group from '../../resources/group.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const About = () => {
  
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    // console.log("section in view", inView)
    if(inView){
      animation.start({
        x : 0,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({x : '-100vw'})
    }
   // eslint-disable-next-line
  }, [inView])

  return (
    <motion.div
    className='ab-wrapper'
     ref = {ref}
    animate={animation}
    >
      <div className="ab-top">
         <h6>ROYAL TREAT SPA</h6>
         <h3>Why Choose Us ?</h3>
      </div>
      <div className='ab-bottom'>
        <img className='ab-img' src={group} alt="" />
        <div className='ab-message'>
            <h3 className='title-font'>ROYAL TREAT SPA</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            <button className='a-btn'><Link className='a-link' to="/contact">CONTACT US NOW</Link></button>
        </div>
      </div>
    </motion.div>
  )
}

export default About