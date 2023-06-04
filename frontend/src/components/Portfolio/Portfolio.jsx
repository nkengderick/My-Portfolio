import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './projects.css'
import axios from 'axios'
import mern from '../../assets/images/MER.jpg'

const Portfolio = () => {

  const [projects, setProjects] = useState([])
    
  useEffect(() => {
    axios.get('http://localhost:8000/apiproject')
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
            <div key={newProject.id} className='project'>
                  <div className='projectimg'>
                    <img src = {mern} />
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