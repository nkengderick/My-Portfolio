import { React } from 'react'
import './ctabtn.css'
import { HashLink as Link } from 'react-router-hash-link'
import cv from '../../assets/files/my cv.pdf'

const Ctabtn = () => {


  return (

    <div className='Ctabtn'>
      <button type='Download' id='downloadcv' ><a href={cv} download={cv}>Download CV</a></button>
        <p>
        <Link to="#calltoaction" id='get'>Get to me</Link>
        </p>
    </div>
  )

}


export default Ctabtn