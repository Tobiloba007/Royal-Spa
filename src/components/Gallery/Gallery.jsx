import React from 'react'
import './gallery.css'
import images from '../images';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'


const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(images[0]);

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
        animation.start({x : '100vw'})
      }
    }, [inView])

    return(
     <motion.div className="g-wrapper"
      ref = {ref}
      animate={animation}
     >
        <div className='g-container'>
          <h2 className='g-title'>GALLERY</h2>
           <img className='g-selected' src={selectedImg} alt="" />
          
           <div className='g-bottom'>
           {images.map((img, index) => {
            return(
                <img style={{border: selectedImg === img ? "3px solid purple" : ""}}
                 key={index}
                 src={img}
                 alt="gallery"
                 onClick={() => setSelectedImg(img)} />
            )
             })}
             </div>
        </div>  
     </motion.div>  
    );
  }


export default Gallery;