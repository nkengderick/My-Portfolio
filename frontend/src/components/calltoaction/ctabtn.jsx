


import { React, Component, useState, useEffect } from 'react'
import './ctabtn.css'
import { HashLink as Link } from 'react-router-hash-link'
import Blob from 'blob'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = false;
axios.defaults.headers = {'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS' }


const Ctabtn = () => {

  const [cvContent, setCvContent] = useState('');
  const [buttonRef, setButtonRef] = useState(null);

  useEffect(() => {

    axios.get('/downloadcv').then(response => {
      setCvContent(response.data);
    });
  }, []);

  const downloadCV = () => {

    if (!buttonRef) {
      return;
    }

    const blob = new Blob([cvContent], 
      {
        type: 'application/json'
      })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'cv.json'
  
      document.body.appendChild(link)
  
      link.click()
    }


  return (

    <div className='Ctabtn'>
      <button ref={setButtonRef} type='Download' id='downloadcv' onClick={downloadCV}>Download CV</button>
        <p>
        <Link to="#calltoaction" id='get'>Get to me</Link>
        </p>
    </div>
  )

}


export default Ctabtn