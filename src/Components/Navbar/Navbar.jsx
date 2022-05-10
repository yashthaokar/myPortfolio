import React from 'react'
import './Navbar.css'
import{SiHomeassistantcommunitystore} from 'react-icons/si'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBookAdd} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{MdContactPhone} from 'react-icons/md'
import { useState } from 'react'
const Navbar = () => {
  const [activeNav, setActiveNav]= useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}
       className={activeNav === '#' ? 'active' : ''}><SiHomeassistantcommunitystore/></a> 

      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

       <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAdd/></a>

       <a href="#services" onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>

        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>
        
       

    </nav>
  )
}

export default Navbar;