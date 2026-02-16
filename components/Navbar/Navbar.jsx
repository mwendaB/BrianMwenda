"use client"
import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
// eslint-disable-next-line no-unused-vars
import { animate, motion } from 'framer-motion';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '@/app/Data';

const Navbar = () => {
    
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
              <div className="logo">
                    <h3>M</h3>
              </div>
              <ul
                      className="nav_links"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                  })}
              </ul>
              <div className="social_icons" >
              
              <a href="https://www.linkedin.com/in/brian-mwenda-73a926228/"><BsLinkedin/></a>
               <a href="https://github.com/mwendaB" size={"3rem"}> <FaGithub/></a>
               <a href="https://www.instagram.com/its_mwend_a/"> <BsInstagram/></a>
              </div>
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar