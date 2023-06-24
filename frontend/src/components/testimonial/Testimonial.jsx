import React, { useEffect, useState} from 'react'
import './testimonial.css'

import axios from 'axios';

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import face from '../../assets/images/face.png'
import me from '../../assets/images/mytest.jpg'


const Testimonial = () => {

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/testimonials')
    .then((response) => {
      setTestimonials(response.data)
    })
  }, [])


  return (
    <div className='Testimonial' id='testimonials'>
        <h4>See what others are saying</h4>
        <h1>Testimonials</h1>

        <Swiper 
          className="testimonials"
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          spaceBetween={40}
          slidePerView={1}
          pagination = {{ clickable: true}}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className='testimonial'>
                <div className='face'>
                    <img src={
                      testimonial.client === "Client1" ? me :
                      testimonial.client === "Client2" ? face :
                      testimonial.client === "Client3" ? me :
                      testimonial.client === "Client4" ? face :
                      me
                    } alt="client" />
                </div>
                <h5>{testimonial.client}</h5>
                <p>{testimonial.testimonial}</p>
            </SwiperSlide>
          ))}


        </Swiper>
    </div>
  )
}

export default Testimonial