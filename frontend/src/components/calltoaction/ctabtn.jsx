import React from 'react'
import './ctabtn.css'
import { HashLink as Link } from 'react-router-hash-link'

const Ctabtn = () => {
  return (
    <div className='Ctabtn'>
      <button type='Download' id='/downloadcv' download>Download CV</button>
        <p>
        <Link to="#calltoaction" id='get'>Get to me</Link>
        </p>
    </div>
  )
}

export default Ctabtn