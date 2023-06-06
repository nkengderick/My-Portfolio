import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navs = () => {  
  return (
    <div className="Navs">
<ul>
    <li><Link to="#contact">Contact</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/">Home</Link></li>
</ul>
    </div>
  );
}

export default Navs
