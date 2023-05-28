import React from 'react'
import './landing.css'

import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='Landing'>
        <h1>Welcome to my portfolio</h1>
          <p>A full stack developoer with experience in variety of Frameworks. I'll build API, web applications, software, Database and more</p>
          <p className='link'><Link to="/about">Get to know me</Link></p>
          <h2>What i offer: </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ullam fugiat voluptates neque fugit! Libero saepe adipisci ullam vero temporibus accusamus, error mollitia id. Ut obcaecati aliquam dolorum quo vel!</p>
          <button className='svcbtn'>
            <p className='link'><Link to="/services">View Service</Link></p>
          </button>
        </div>
  )
}

export default Landing