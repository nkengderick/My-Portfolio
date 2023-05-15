import React from "react";
import { Link } from "react-router-dom";
import './contact.css'

const Contact = () => {
  return (
    <div className="Contact" id="contact">
     
      <h2>Contact Me: </h2>
      <h3>Email: </h3>
      <p><Link>nkengbderick@gmail.com</Link></p>
      <h3>Phone: </h3>
      <p><Link>+ 237 6 71 24 13 54</Link></p>
      <h3>WhatsAPP: </h3>
      <p><Link>+(237) 681 390 155</Link></p>
      <h3>LinkedIn: </h3>
      <h3>Facebook: </h3>

    </div>
  );
}

export default Contact
