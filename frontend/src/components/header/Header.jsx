import React from 'react'

import Navbar from '../navbar/Navbar'

import './header.css'


const Header = () => {
  return (
    <div className='Header' id='header'>
        <div className='nav'>
        <Navbar />
        </div>
      </div>
  )
}

export default Header