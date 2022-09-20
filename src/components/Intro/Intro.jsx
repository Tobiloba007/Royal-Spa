import React from 'react'
import './intro.css'
import Carousel from 'react-bootstrap/Carousel';
import {motion} from 'framer-motion';


const Intro = () => {
  return (
    <motion.div className='i-wrapper'
    initial={{y : '-250vh', opacity : 0}}
    animate={{y : 0, opacity : 1}}
    transition={{delay : 0.5, duration : 1, type: 'spring'}}
    >
        <Carousel fade d>
      <Carousel.Item>
        <motion.span className='i-message'
        initial={{x : '-150vw'}}
        animate={{x : 0}}
        >
        Luxury, Quality <br /> & Comfort .
        </motion.span>
        <img className="d-block i-images"
        initial={{x : '150vw'}}
        animate={{x : 0}}

          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
      <span className='i-message'
        initial={{x : '-150vw'}}
        animate={{x : 0}}
      >
      Revive Your Mind,<br /> Body & Spirit .
      </span>
        <motion.img className="d-block i-images"
        initial={{x : '150vw'}}
        animate={{x : 0}}

          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </motion.div>
  )
}

export default Intro