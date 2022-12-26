import React ,{useRef, useState} from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3ede6t",
        "template_hn9p13h",
        form.current,
        "OQ9tULbJWgkjkyXMk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>Full Stack Developer
I am available for freelance work. Connect with me via email or through a phone call.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
          <a href="https://www.linkedin.com/in/brian-mwenda-73a926228/"><BsLinkedin/></a>
               <a href="https://github.com/mwendaB" size={"3rem"}> <FaGithub/></a>
               <a href="https://www.instagram.com/its_mwend_a/"> <BsInstagram/></a>
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            </div>
     

          <div className="row">
            <textarea name="message" className="user" placeholder="Message"></textarea>
          </div>

          <motion.input 
           whileHover={{ scale: 1.1 }}
           transition={{duration: 0.3}}
           className="btn"
           type= "submit"
          />
          <br />
           <span className='POP'>{done && "Thanks for Contacting me, I`ll get back to you soon"}</span>

         
          </form>
          
  

        </motion.div>
      </div>
    </div>
  )
}

export default Contact