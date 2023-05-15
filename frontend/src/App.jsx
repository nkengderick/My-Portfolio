import './App.css'
import Footer from './components/footer/Footer';
import React from "react";

import Header from './components/header/Header';
import Landing from './components/Landing/Landing';
const App = () => {  
  return (
    <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
  );
}

export default App



