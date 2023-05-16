import React from "react";
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


import { Link } from "react-router-dom";
import Calltoaction from "../calltoaction/Calltoaction";


const Contact = () => {
  return (
    <section className="Contact" id="contact">
     
     <h5>Get in touch</h5>
     <h2>Contact Me: </h2>

     <div className="contactContainer">
      <div className="contactOptions">
        <article className="contactOption">
          <MdOutlineEmail className="contactOptionIcon"/>
          <h4>Email: </h4>
          <h5>nkengbderick@gmail.com</h5>
          <Link to="mailto:nkengbderick@gmail.com" target="blank">send a message</Link>
        </article>

        <article className="contactOption">
          <BsWhatsapp className="contactOptionIcon"/>
          <h4>WhatsAPP: </h4>
          <h5>Direct message</h5>
          <Link to="https://web.whatsapp.com/send?phone=+237681390155" target="blank">Whatsapp me</Link>
        </article>
      </div>
      <Calltoaction />
     </div>

    </section>
  );
}

export default Contact
