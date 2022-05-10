import React from 'react'
import './Testimonials.css'
import myimg from '../Images/myimg.jpg' 

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Rewiew from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container.testimonials__container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}   
       pagination={{ clickable: true }}>
 
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={myimg} alt="" />           
          </div>
           <h5 className='client__name'>Aman duniyadhar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla quae vel illum, libero officia quibusdam quam reiciendis pariatur corrupti dolore nam in molestias cupiditate!
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={myimg} alt="" />           
          </div>
           <h5 className='client__name'>Aman duniyadhar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla quae vel illum, libero officia quibusdam quam reiciendis pariatur corrupti dolore nam in molestias cupiditate!
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={myimg} alt="" />           
          </div>
          <h5 className='client__name'>Aman duniyadhar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla quae vel illum, libero officia quibusdam quam reiciendis pariatur corrupti dolore nam in molestias cupiditate!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={myimg} alt="" />           
          </div>
          <h5 className='client__name'>Aman duniyadhar</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla quae vel illum, libero officia quibusdam quam reiciendis pariatur corrupti dolore nam in molestias cupiditate!
            </small>
        </SwiperSlide>


      </Swiper>
      
    </section >
  )
}

export default Testimonials;