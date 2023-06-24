import './about.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Ctabtn from '../calltoaction/ctabtn'
import axios from 'axios'

import myimg from '../../assets/images/me.jpg'

const About = () => {

    const [aboutme, setAboutme] = useState([])
    
    useEffect(() => {
      axios.get('https://nkeng-portfolio.onrender.com/api/about')
      .then((response) => {
        setAboutme(response.data)
      })
    }, [])

  return (

    <div className='About' id='about'>
          <h1>About Me</h1>
      <section className='about'>
            <div className='img'>
              <div className="me">
              <img src={myimg} alt="Nkengbeza Derick" />
              </div>
              <h2>{aboutme.name}</h2>
              <h5>{aboutme.specialty}</h5>
            </div>   
        <div className='content'>
          <div className='cards'>
            <div className='card'>
                <p>Experience</p>
                <p>{aboutme.experience}</p>
            </div>
            <div className='card'>
                <p>Projects</p>
                <p>{aboutme.project}</p>
            </div>
            <div className='card'>
                <p>Skill level</p>
                <p>{aboutme.skill}</p>
            </div>
          </div>
          <p className='description'>{aboutme.description}</p>
        </div>       
      </section>
      <Ctabtn/>
    </div>
  )
}

export default About