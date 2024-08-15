import React from 'react';
import "./css/AboutUs.css";
import logo from './img/logo.png';

const AboutUs = () => {
  return (
    <div className="background-wrapper">
      <div className="about-us-container">
        <div className="image-container">
          <img src={logo} alt='logo' />
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <p>Welcome to the <span>ISAMM Microsoft Club</span>, your gateway to a world of technology, innovation, and career growth. We are a vibrant community of passionate tech enthusiasts and aspiring professionals dedicated to exploring the vast realm of Microsoft technologies. Through engaging workshops, exciting competitions, and personalized career development services, we offer services for learning, collaboration, and skill enhancement. Join us on this exciting journey where dreams transform into digital realities. Embrace the future of technology with <span>ISAMM Microsoft Club</span> where we are driven by passion!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
