import React from 'react'
import './Footer.css'
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Y@shCode</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <div className='footer__socials'>

      
        <a href="yashthaokar17n@gmail.com " target='_blank'>  <AiOutlineMail /></a>

     

        <a href="https://www.instagram.com/yashthaokar/?hl=en" target='_blank'>   <BsInstagram /></a>


      
        <a href=" https://wa.me/917058445134" target='_blank'>  <BsWhatsapp /></a>

      </div>
      <div className='footer__copyright'>
        <small>&copy; Y@shCode. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer