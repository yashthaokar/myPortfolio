import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
   <div className='header__socials'>
       <a href="https://github.com" target='_blank'><ImGithub/> </a>
       
       <a href="https://whatsApp.com" target='_blank'><BsWhatsapp/></a>

       <a href="https://linkedin.com" target='_blank'> <BsLinkedin/></a>
       <a href="https://linkedin.com" target='_blank'> <BsInstagram/></a>
   </div>
  )
}

export default HeaderSocial;