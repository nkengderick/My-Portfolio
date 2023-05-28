import './about.css'
import React from 'react'
import Contact from '../contact/Contact'
import Ctabtn from '../calltoaction/ctabtn'

import myimg from '../../assets/images/me.jpg'
import Navbar from '../navbar/Navbar'

var myig = require('../../assets/images/me.jpg');
const About = () => {
  return (
    <div className='About' id='about'>
              <Navbar />
      <section className='about'>
          <h1>About Me</h1>
            <div className='img'>
              <img src={myimg} alt="Nkengbeza Derick" />
            </div>          
          <h2>Nkengbeza Derick</h2>
          <h5>Software and Full stack developer</h5>
          <div id='cards'>
            <div className='card'>
                <p>Experience</p>
                <p>2 years +</p>
            </div>
            <div className='card'>
                <p>Projects</p>
                <p>Completed 4</p>
            </div>
            <div className='card'>
                <p>Skills</p>
                <p>Advanced</p>
            </div>
          </div>
          <p>I am a software Engineering second year student in FET. I have passion for developing bueatiful and intuitive user interfaces and good databases as a full stack MERN developer. I also develope desktop applications using OOP languages like JAVA and i have enough experience in software development. I have a good Mastery of database design and leverage these skill in development. I love learning new things to keep up to latest trends and technologies in the Tech industries</p>
      </section>
      <Ctabtn/>
      <Contact />
    </div>
  )
}

export default About