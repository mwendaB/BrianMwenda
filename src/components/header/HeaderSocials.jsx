import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github" target="_blank"> <FaGithub/> </a>
        <a href="https://instagram.com" target="_blank"> <FiInstagram/> </a>
    </div>
  )
}

export default HeaderSocials