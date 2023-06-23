import { React } from 'react'
import './ctabtn.css'
import { HashLink as Link } from 'react-router-hash-link'
import cv from '../../assets/files/my cv.pdf'

const Ctabtn = () => {


  return (

    <div className='Ctabtn'>
        <p>
        <Link id='linkone' to={cv} download={cv}>Download CV</Link>
        <Link to="#calltoaction" id='linktwo'>Get to me</Link>
        </p>
    </div>
  )

}


export default Ctabtn