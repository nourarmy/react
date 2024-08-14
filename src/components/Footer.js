import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import './css/Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log(result.text);
          setFormState({
            fullName: '',
            email: '',
            phone: '',
            department: '',
            message: ''
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* Contact Section */}
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Fill out the form below to send us an email and we will get back to you as soon as possible.</p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Full Name"
                        value={formState.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="department"
                    className="form-control"
                    value={formState.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="project">Project Team</option>
                    <option value="business">Business Development Team</option>
                    <option value="production">Production Team</option>
                    <option value="logistics">Logistics Team</option>
                    <option value="design">Design Team</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Why this department?"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Join Us
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p><FaMapMarkerAlt /> ISAMM, Campus Universitaire de la Manouba</p>
              <p><FaEnvelope /> hi.imc2011@gmail.com</p>
              <p><FaFacebook /> Facebook</p>
              <p><FaInstagram /> Instagram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-content">
            <h2><span style={{ color: '#EF5225' }}>ISAMM</span>{' '}
              <span style={{ color: '#7EB941' }}>Microsoft</span>{' '}
              <span style={{ color: '#FCB712' }}>Club</span></h2>
            <p>IMC ~ Driven By passion</p>
            
          </div>
          <div className="footer-content">
            <div className="footer-social">
              <a href="https://www.google.com/maps/place/Manouba+University">
                <FaMapMarkerAlt />
              </a> |{' '}
              <a href="mailto:hi.imc2011@gmail.com">
                <FaEnvelope />
              </a> |{' '}
              <a href="https://www.facebook.com/IsammMicrosoftClub">
                <FaFacebook />
              </a> |{' '}
              <a href="https://www.instagram.com/isamm_microsoft_club/?hl=en">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-rights">
              <p>Designed By IMC</p>
              <p>© Copyright SA dev. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
