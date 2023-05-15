import React from 'react'
import './calltoaction.css'

const Calltoaction = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='Calltoaction' id='calltoaction'>
      <h3>Interested in Collaborating?</h3>
      <p>Send me a message and lets get in touch!</p>
      <form className='contactorm' onSubmit={handlesubmit}>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Calltoaction