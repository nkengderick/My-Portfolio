import './App.css'
import Footer from './components/footer/Footer';
import React, { Component } from "react";
import Experience from "./components/experience/Experience";
import Projects from './components/Portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from "./components/contact/Contact";
import Ctabtn from './components/calltoaction/ctabtn';
import Header from './components/header/Header';
import Services from './components/services/Services';
import About from './components/about/About'
import Navbar from './components/Navigate/Navbar'
import Navs from './components/pages/Navs'

const App = () => {  
  return (
    <div className="App">
        <Navs/>
        <Header />
        <Navbar/>
        <About />
        <Experience />
        <Services />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
  );
}

export default App



