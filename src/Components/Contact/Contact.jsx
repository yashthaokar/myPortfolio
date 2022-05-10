import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';


const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact __container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yashthaokar17n@gmail.com</h5>
            <a href="yashthaokar17n@gmail.com " target='_blank'>Send a Massage</a>
 
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>yashthaokar</h5>
            <a href="https://www.instagram.com/yashthaokar/?hl=en" target='_blank'>Send a Massage</a>

          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>What's App</h4>
            <h5>Yash Thaokar</h5>
            <a href=" https://wa.me/917058445134" target='_blank'>Send a Massage</a>

          </article>

        </div>
        {/* END OF CONTACTI OPTION */}
        <form >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="5" placeholder='Your massage' required></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;