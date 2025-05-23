'use client';
import React from 'react'
import portfolio from "@/public/portfolio.jpg"
import "./MainHero.scss"
import { motion } from 'framer-motion'
import Image from 'next/image';


const MainHero = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='MainHero'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <Image src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Brian Mwenda</span> </h3>
        <span className='job'>Software Developer Based in Kenya</span>
        <span className='text'>Passionate<br /> to craft innovative <br />  web products.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me</motion.a>
        <div
          className="web"
        >Frontend Developer
        </div>
        <div
          className="ui"
        >
          Backend Developer
        </div>
        <div
          className="freelance"
        >
          Consultant
        </div>
      </div>
    </motion.div>
  )
}

export default MainHero