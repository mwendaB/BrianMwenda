import React from 'react';
import "./Footer.scss";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright&copy;2023 All rights reserved <span></span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
            
             
              <a href="https://www.linkedin.com/in/brian-mwenda-73a926228/"><BsLinkedin/></a>
               <a href="https://github.com/mwendaB" size={"3rem"}> <FaGithub/></a>
               <a href="https://www.instagram.com/its_mwend_a/"> <BsInstagram/></a>
              </div>
            
            
          
      </div>
    </motion.div>
  )
}

export default Footer