import React from 'react'
import './Portfolio.css'
import myimg from '../Images/myimg.jpg' 

const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
            <a href="https://dribbble.com/shots/18134973-Datum-source" className='btn btn-primary' target='blank'> Live Demo</a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
            <a href="https://dribbble.com/shots/18134973-Datum-source" className='btn btn-primary' target='blank'> Live Demo</a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
            <a href="https://dribbble.com/shots/18134973-Datum-source" className='btn btn-primary' target='blank'> Live Demo</a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
            <a href="https://dribbble.com/shots/18134973-Datum-source" className='btn btn-primary' target='blank'> Live Demo</a>
           </div>        
     </article>
      <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
            <a href="https://dribbble.com/shots/18134973-Datum-source" className='btn btn-primary' target='blank'> Live Demo</a>
           </div>        
     </article>
     <article className='portfolio__item'>
        <div className='Portfolio__item-image'> 
        <img src={myimg} alt="project" />
          </div>
           <h3>This is a portfolio item title</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/yashthaokar" className='btn' target='_blank'> Github </a>
            <a href="https://dribbble.com/shots/18134973-Datum-source" className='btn btn-primary' target='blank'> Live Demo</a>
           </div>        
     </article>
      
    </div>
    </section >
  )
}

export default Portfolio