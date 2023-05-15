import React from "react";
import './navbar.css'
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {  
  return (
    <div className="Navbar">
<ul>
    <li><Link to="#contact">Contact</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/">Home</Link></li>
</ul>
    </div>
  );
}

export default Navbar
