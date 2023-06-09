import React, { useRef, useState } from 'react'
import axios from "axios";
import './calltoaction.css'
//import emailjs from 'emailjs-com'

//default axios 
axios.defaults.baseURL = "https://nkeng-portfolio.onrender.com";
axios.defaults.withCredentials = false;
axios.defaults.headers = {'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS' }

const Calltoaction = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [action, setAction] = useState("");
  

  const handlesubmit = (e) => {

/*  
    var serviceID = 'service_nkengb'
    var templateID = 'template_qxeu0pf'
    var templateParams = form.current
    var publicKey = 'lc6rPXqZ0XHRTH01y'
*/
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please complete the form.");
      return;
    }
//post user info and message to server and save in mongodb database

/*
    emailjs.sendForm(serviceID, templateID, templateParams, publicKey)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }          
*/
const url = action === "request" ? "/api/user"
          : action === "testify" ? "/api/testimonials"
          : "/api/user"


{url === "/api/user" ? (
  axios.post(url, { name, email, message })
              .then(response => {
                console.log(response.data)
              })
              ) :
              url === "/api/testimonials" ? (
                axios.post(url, { client: name, testimonial: message })
                .then(response => {
                  console.log(response.data)
                })
                ) :  axios.post(url, { name, email, message, })
                .then(response => {
                  console.log(response.data)
                })
              }

    }
  return (
    <div className='Calltoaction' id='calltoaction'>
      <h3 className='formhead'>Intersted in collaborating?</h3>
      <p className='formhead'>Send me a message</p>
      <form className='contactorm' ref={form} onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}  cols="30" rows="10" required></textarea>
        </div>
        <div className='btn'>
          <button type='submit' name="request" onClick={(e) => setAction(e.target.name)}>Request</button>
          <button type='submit' name="testify" onClick={(e) => setAction(e.target.name)}>Testify</button>
        </div>
      </form>
    </div>
  )
}

export default Calltoaction