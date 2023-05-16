import React, { useRef } from 'react'
import './calltoaction.css'
import emailjs from 'emailjs-com'

const Calltoaction = () => {
  const form = useRef();
  const handlesubmit = (e) => {
    var serviceID = 'service_nkengb'
    var templateID = 'template_qxeu0pf'
    var templateParams = form.current
    var publicKey = 'lc6rPXqZ0XHRTH01y'

    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, templateParams, publicKey)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
          console.log('FAILED...', error);
      });
    }
  return (
    <div className='Calltoaction' id='calltoaction'>
      <h3>Intersted in collaborating?</h3>
      <p>Send me a message</p>
      <form className='contactorm' ref={form} onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' name='email' required/>
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="message" cols="30" rows="10" required></textarea>
        </div>
        <button type='submit' className='sbtbtn'>Submit</button>
      </form>
    </div>
  )
}

export default Calltoaction