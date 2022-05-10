import React from 'react'
import './Service.css'
import {BsCheckLg} from 'react-icons/bs'

const Service = () => {
  return (
    <section id='service'>
      <h5> What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service' >
          <div className='service__head' >
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
           
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            
          </ul>
        </article>
        {/* End of UI/Ux */}
        <article className='service' >
          <div className='service__head' >
            <h3>Web Devlopment</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
           
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            
          </ul>
        </article>
        {/* End Web Development */}
        <article className='service' >
          <div className='service__head' >
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
           
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci.</p>
            </li>
            
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Service;