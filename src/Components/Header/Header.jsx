import React from 'react'
import './Header.css'

import myimg from '../Images/myimg.jpg'
import HeaderSocial from './HeaderSocial'
import  '../Header/Header.css'
import Cta from './Cta'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
    <h5>Hello  I'm</h5>
   <h1>Yash Thaokar</h1>
   <h5 className='text-light'>FullStack Developer</h5>
  <Cta/>
   <HeaderSocial/>
   <div className='me'>
   <img src={myimg} alt="my-image" />
   </div>
  <a href="#contact" className='scroll__down'>Scroll Down</a>      </div>
    </header>
  )
}

export default Header;