import './about.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Contact from '../contact/Contact'
import Ctabtn from '../calltoaction/ctabtn'
import axios from 'axios'

import myimg from '../../assets/images/me.jpg'
import Navbar from '../navbar/Navbar'

const About = () => {

    const [aboutme, setAboutme] = useState([])
    
    useEffect(() => {
      axios.get('http://localhost:8000/apiabout')
      .then((response) => {
        setAboutme(response.data)
      })
    }, [])

  return (

    <div className='About' id='about'>
          <h1>About Me</h1>
      <section className='about'>
            <div className='img'>
              <img src={myimg} alt="Nkengbeza Derick" />
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