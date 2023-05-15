import './about.css'
import React from 'react'
import Contact from '../contact/Contact'
import Header from '../header/Header'
import Ctabtn from '../calltoaction/ctabtn'
import Calltoaction from '../calltoaction/Calltoaction'

import myimg from '../../assets/images/me.jpg'


const About = () => {
  return (
    <div className='About' id='about'>
              <Header />
      <section>
          <h1>About Me</h1>
          <div className='img'>
            <img src={myimg} alt="Nkengbeza Derick" />
          </div>
          <h2>Nkengbeza Derick</h2>
          <h5>Software and Full stack developer</h5>
          <p>I am a software Engineering student. I have passion for developing bueatiful and intuitive user interfaces and good databases as a full stack MERN developer. I also develope desktop applications using OOP languages like JAVA and i have enough experience in software development. I have a good Mastery of database design and leverage these skill in development. I love learning new things to keep up to latest trends and technologies in the Tech industries</p>
          <Ctabtn />
          <h3>My Skills</h3>
          <p>I have a mastery of the following programming languages and frameworks</p>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Java</li>
              <li>c/c++</li>
              <li>MySQL</li>
              <li>MongoDb</li>
            </ul>
            <Ctabtn />
            <p>Apart from programing, AI, graphics, are a</p>
          <h3>Qualifications</h3>
          <ul>
            <li>Website developement certificate</li>
            <li>B.Eng in Computer Engineering 2nd year student in FET</li>
          </ul>
      </section>
      <Calltoaction />
      <Contact />
    </div>
  )
}

export default About