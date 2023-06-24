import { React } from 'react'
import './ctabtn.css'
import { HashLink as Link } from 'react-router-hash-link'
import cv from '../../assets/files/my cv.pdf'

const Ctabtn = () => {


  return (

    <div className='Ctabtn'>
        <p>
        <a id='linkone' target='blank' href={cv} download>Download CV</a>
        <Link to="#calltoaction" id='linktwo'>Get to me</Link>
        </p>
    </div>
  )

}


export default Ctabtn