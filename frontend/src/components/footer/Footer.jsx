import React from 'react'
import { HashLink as Link } from "react-router-hash-link"
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (

    <div className='Footer'>
     
     <a href="#" className='logo link'>Nkeng</a>

      <ul className='footerLinks'>
        <li><Link className='link' to="#">Home</Link></li>
        <li><Link className='link' to="#about">About</Link></li>
        <li><Link className='link' to="#experience">Experience</Link></li>
        <li><Link className='link' to="#services">Services</Link></li>
        <li><Link className='link' to="#projects">Portfolio</Link></li>
        <li><Link className='link' to="#testimonials">Testimonials</Link></li>
        <li><Link className='link' to="#contact">Contact</Link></li>
      </ul>
      
      <ul className='footerMedias'>
        <li><Link className='link' to="https://facebook.com" target='blank'><FaFacebookF/></Link></li>
        <li><Link className='link' to="https://linkedin.com" target='blank'><BsLinkedin/></Link></li>
        <li><Link className='link' to="https://github.com" target='blank'><FaGithub/></Link></li>
        <li><Link className='link' to="https://twitter.com" target='blank'><FaTwitter/></Link></li>
      </ul>
      
      <div className="copyRight">
            <h3>@copyright ND 2023</h3>
      </div>
      
    </div> 
  )
}

export default Footer