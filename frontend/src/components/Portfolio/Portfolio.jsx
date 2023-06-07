

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './projects.css'
import axios from 'axios'
import mern from '../../assets/images/MER.jpg'
import figma from '../../assets/images/figma.png'
import airline from '../../assets/images/airline.jpg'
import pharma from '../../assets/images/javapharmacy.jpg'

const Portfolio = () => {

  const convert = (buffer) => {
    const image = new Image();
    image.src = `data:image/jpeg;base64,${buffer}`;
    return image;
  };

  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://nkeng-portfolio.onrender.com/api/project')
    .then((response) => {
      setProjects(response.data)
    })
  }, [])

  return (
    <div className='Portfolio' id='projects'>
      <h2>Portfolio</h2>
      <h1>Projects I've worked on</h1>
      <div className='projects'>
         { projects.map((newProject) => (

          <div key={newProject._id} className='project'>
           <div className='projectimg'>
           <img src = {
            newProject._id === "647d931dd6fd1d5f2fdbff35" ? pharma : 
            newProject._id === "647d9377d6fd1d5f2fdbff38" ? figma : 
            newProject._id === "647d93f2d6fd1d5f2fdbff3e" ? mern : 
            newProject._id === "647e2c94ff0304b8c844acca" ? airline : 
            mern} />
           </div>
           <h3>{newProject.title}</h3>
           <p>{newProject.description}</p>
           <div className="projectcta">
           <a href={newProject.link} target='blanc'>Github</a>
           </div>
           </div>
          
))}
        </div>
        </div>
  )
}

export default Portfolio
