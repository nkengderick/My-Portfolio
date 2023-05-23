import './App.css'
import Footer from './components/footer/Footer';
import React from "react";
import Navbar from './components/navbar/Navbar';
import Experience from "./components/experience/Experience";
import Projects from './components/Portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from "./components/contact/Contact";
import Ctabtn from './components/calltoaction/ctabtn';
import Header from './components/header/Header';
import Landing from './components/Landing/Landing';


const App = () => {  
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Landing />
        <Ctabtn />
        <Experience />
        <Ctabtn />
        <Projects />
        <Ctabtn />
        <Testimonial />
        <div>You can get to me one on one below</div>
        <Contact />
        <Footer />
      </div>
  );
}

export default App



