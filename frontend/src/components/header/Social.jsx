import React from 'react'
import './social.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div className='Social'>
        <Link className='link' to='https://linkedin.com' target='blank'><BsLinkedin/> </Link>
        <Link className='link' to='https://github.com/' target='blank'><FaGithub/> </Link>
        <Link className='link' to='https://facebook.com' target='blank'><FaFacebookF/> </Link>
        <Link className='link' to='https://twitter.com' target='blank'><CgTwitter/> </Link>
    </div>
  )
}

export default Social