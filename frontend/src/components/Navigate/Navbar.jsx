import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import './navbar.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className='Nav'>
        <Link className='nav' to="#"> <AiOutlineHome/> </Link>
        <Link className='nav' to="#about"> <AiOutlineUser/> </Link>
        <Link className='nav' to="#experience"> <BiBook/> </Link>
        <Link className='nav' to="#services"> <RiServiceLine/> </Link>
        <Link className='nav' to="#contact"> <BiMessageSquareDetail/> </Link>
    </div>
  )
}

export default Navbar