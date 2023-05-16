import React from 'react'

import './header.css'

import Social from './Social'
import Ctabtn from '../calltoaction/ctabtn'
import Profile from '../../assets/images/profile.jpg'

import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className='Header' id='header'>
      <div className='h'>
        <h4>Welcome! Meet</h4>
        <h2>Engr. Nkengbeza</h2>
        <h5>Software and Full stack Developer</h5>
        <Ctabtn />
      </div>
      <div className='social'>
        <Social />
      </div>
      <div className='profile'>
        <img src={Profile} alt="Engr. Nkengbeza" className='profilepic' />
      </div>
      <p className='scroll'><Link to='#contact' smooth>Scroll down</Link></p>
      </div>
  )
}

export default Header