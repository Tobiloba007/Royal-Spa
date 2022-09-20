import React from 'react'
import { useState } from 'react'
import './reviews.css'
import people from '../reviewsData'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import { motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {name, text, image} = people[index];

    const {ref, inView} = useInView();
    const animation = useAnimation();
  
    useEffect(() => {
      // console.log("section in view", inView)
      if(inView){
        animation.start({
          x : 0,
          transition: {
            type: 'spring', duration: 2, bounce: 0.3
          }
        });
      }
      if(!inView){
        animation.start({x : '-100vw'})
      }
       // eslint-disable-next-line
    }, [inView])

    const checkNumber = (number) => {
        if(number > people.length -1){
            return 0;
        }
        if(number < 0){
            return people.length -1;
        }
        return number;
    }

    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const prevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);;
        })
    }

  return (
    <motion.div className='r-wrapper'
     ref = {ref}
    animate={animation}
    >
        <div className="r-top">
            <h2>Our Reviews</h2>
            <div className="r-underline"></div>
        </div>
        <div className="r-bottom">
            <div className="r-img-con">
                <img className='r-img' src={image} alt="" />
                <span className='r-icon'><FaQuoteRight fontSize="3em" color='#880085' outline="none" /></span>
            </div>
            <h4 className="r-name">{name}</h4>
            <q className="r-text">{text}</q>

            <div className="btn-con">
                <button className='pre-btn r-btn' onClick={prevReview}>
                    <FaChevronLeft />
                </button>
                <button className='nxt-btn r-btn' onClick={nextReview}>
                <FaChevronRight />
                </button>
            </div>
        </div>
    </motion.div>
  )
}

export default Reviews

