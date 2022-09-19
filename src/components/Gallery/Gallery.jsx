import React from 'react'
import './gallery.css'
import images from '../images';
import { useState } from 'react';
import { motion } from 'framer-motion';


const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(images[0]);

    return(
     <motion.div className="g-wrapper"
     initial={{x : '250vw'}}
     animate={{x : 0}}
     transition={{duration : 8}}
     >
        <div className='g-container'>
          <h2 className='g-title'>GALLERY</h2>
           <img className='g-selected' src={selectedImg} alt="" />
           <div className="g-img-con">

           <div className='g-bottom'>
           {images.map((img, index) => {
            return(
                <img style={{border: selectedImg === img ? "4px solid purple" : ""}}
                 key={index}
                 src={img}
                 alt="gallery"
                 onClick={() => setSelectedImg(img)} />
            )
             })}
             </div>
           </div>
        </div>  
     </motion.div>  
    );
  }


export default Gallery;