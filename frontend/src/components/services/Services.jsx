import React, { useEffect, useState} from "react";
import './services.css';
import Ctabtn from '../calltoaction/ctabtn';
import axios from 'axios'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/apiservices')
    .then((response) => {
      setServices(response.data)
    })
  }, [])
  return (
    <div className='Services' id='services'>
      <div className='serve'>
        <div className="servicecards">
          <div className="serviceheader">
        <h1>Services</h1>
      <h2>What i offer⬇️</h2>
          </div>
      <br />
      {services.map((service) => (
          <div key={service.id} className="servicecard">
            <h2>{service.offer}</h2>
            <p>{service.details}</p>
          </div>
      ))}
        </div>
      </div>
      <h2>Get in touch</h2>
      <p>Interested in working with me?</p>
      <p>Contact me today to discuss your project and get a free discount</p>
      <Ctabtn />
    </div>
  );
};

export default Services