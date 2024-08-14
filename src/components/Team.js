import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import Slider from 'react-slick';
import './css/team.css';

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const descriptions = [
    { name: 'Hamza Khlaf', position: 'Chair', facebook: 'https://www.facebook.com/el.khlafii' },
    { name: 'Islem Gafsi', position: 'President', facebook: 'https://www.facebook.com/profile.php?id=100011372330623' },
    { name: 'Saber Arafoui', position: 'Project Manager', facebook: 'https://www.facebook.com/profile.php?id=100010021113822' },
    { name: 'Mouadh Mkaissi', position: 'Community Manager', facebook: 'https://www.facebook.com/aka.sirius36' },
    { name: 'Nessma Karnit & Amen Khlifi', position: 'Entrepreneurship Managers', facebook: 'https://www.facebook.com/nessma.karnit' },
    { name: 'Yassine Jeridi', position: 'Production Manager', facebook: 'https://www.facebook.com/profile.php?id=100013503153083' },
    { name: 'Nour Bourass', position: 'Logistics Manager', facebook: 'https://www.facebook.com/nour.bourasse.7' },
    { name: 'Yassine Belaid', position: 'Design Manager', facebook: 'https://www.facebook.com/iamyassinebelaid' },
    { name: 'Ikbel Bouzouita', position: 'Business Developer Manager', facebook: 'https://www.facebook.com/ikbel.bouzouita.73' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Duration of each slide in milliseconds
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <Slider {...settings}>
        {descriptions.map((member, index) => (
          <div key={index}>
            <div
              className={`cardd ${
                index === currentSlide - 1 ||
                (currentSlide === 0 && index === descriptions.length - 1)
                  ? 'prev-cardd'
                  : index === currentSlide + 1 ||
                    (currentSlide === descriptions.length - 1 && index === 0)
                  ? 'next-cardd'
                  : ''
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/img${index + 1}.jpg`}
                alt={`Image ${index + 1}`}
              />
              <div className="titles">
                <h3>{member.name}</h3>
                <h5>{member.position}</h5>
                <a
                  href={member.facebook}
                  target="_self"
                  rel="noopener noreferrer"
                  className="facebook-icon"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
