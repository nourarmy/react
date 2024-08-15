import React from 'react';
import './css/home.css';

const partners = [
  {
    name: 'Partner 1',
    logo: 'path_to_partner_1_logo',
    url: 'http://partner1website.com'
  },
  {
    name: 'Partner 2',
    logo: 'path_to_partner_2_logo',
    url: 'http://partner2website.com'
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <div className="partnership-bar">
      <h2>Our Partners</h2>
      <div className="partners">
        {partners.map((partner, index) => (
          <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
