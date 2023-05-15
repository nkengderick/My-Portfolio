import React from 'react'
import { Link } from 'react-router-dom'
import './projects.css'

const Portfolio = () => {
  return (
    <div className='Portfolio' id='projects'>
        <h1>Projects I've worked on</h1>
        <ul>
          <li>Real Estate Web App with react</li>
          <li>Airline desktop application with Java</li>
          <li>Pharmacy management system with jave</li>
        </ul>
       <p className='link'><Link>View my projects on github</Link></p>
        </div>
  )
}

export default Portfolio