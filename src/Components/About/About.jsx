import React from 'react'
import './About.css'
import myimg from '../Images/myimg.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={myimg} alt="About Image" />
          </div>
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>


          <article className="about__card">
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>50+ WorldWide</small>
            <small>100+ India</small>
          </article>

          <article className="about__card">
            <VscFolderActive className='about__icon' />
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugiat porro ad ducimus temporibus asperiores odit soluta at modi, enim provident, consectetur illum vel natus!
          </p>
          <a href="#contact " className='btn btn-primary'>Let's Talk!</a>

        </div>
      </div>
    </section >
  )
}

export default About;