import React from 'react';
import './services.css';
import Contact from '../contact/Contact'
import Ctabtn from '../calltoaction/ctabtn';
import Navbar from '../navbar/Navbar';

const Services = () => {
  return (
    <div className='Services' id='services'>
      <Navbar />
      <div className='serve'>
      <h1>Services</h1>
      <div className="servicecards">
        <div className="servicecard">
        <h2>Frontend Developement: </h2>
        <p>I specialize on creating modern user interfaces using css, bootstrap, react. With my experience i can create you responsive user friendly websites to enhance your brand</p>
        </div>
        <div className="servicecard">
        <h2>Backend Developement: </h2>
        <p>As a full stack developer, i have extensive experience in backend using nodejs, Express, c++ and java. i can buid you a reliable and scalable system whether you need a third party to integrate i am experienced in working with APIs.</p>     
          </div>
        <div className="servicecard">
          
        <h2>Full stack development with MERN: </h2>
        <p>MERN stack is my favorite technoloy to work with. It is powerful and with my experties in MERN i can build you awesome full fledge applications from scratch or add features to your exiting one</p>
          </div>
        <div className="servicecard">
          
        <h2>Moblie App Developement: </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse recusandae illum accusamus voluptatum magnam repellendus ducimus, id consequuntur tenetur voluptas optio exercitationem suscipit fugit dolorem at. Distinctio, saepe nobis!</p>
          </div>
        <div className="servicecard">
          
        <h2>Desktop Application Development with JAVA</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed distinctio voluptates quisquam perferendis consectetur aspernatur, fugiat mollitia minus vitae sit quod deserunt ex sapiente blanditiis ipsa eveniet suscipit! Deleniti!</p>
          </div>
        <div className="servicecard">
        <h2>Other services: </h2>
          <p>UI/UX design</p>
          <p>Technical Consultancy</p>
          </div>
      </div>
    </div>
        <h2>Get in touch</h2>
        <p>Interested in working with me?</p>
        <p>Contact me today to discuss your project and get a free discount</p>
    <Ctabtn/>
    <Contact />
    </div>
  );
};

export default Services