import React, { useState, useEffect } from "react";
import "./css/home.css";
import image1 from "./img/a.jpg";
import image2 from "./img/b.jpg";
import image3 from "./img/c.jpg";
import logo from "./img/imc.png";

const images = [image1, image2, image3];
const words = ["Diversity", "Passion", "Motivation", "IMC"];

const HomeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setOpacity(1);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setWordIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
        setOpacity(1);
      }, 500);
    } else if (direction === "next") {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setOpacity(1);
      }, 500);
    }
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Search button clicked");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="IMC Logo" className="logo-img" />
          </div>
          <ul className="navbar-nav">
  <li><a onClick={() => scrollToSection("home")}>Home</a></li>
  <li><a onClick={() => scrollToSection("about")}>About</a></li>
  <li><a onClick={() => scrollToSection("services")}>Services</a></li>
  <li><a onClick={() => scrollToSection("events")}>Events</a></li>
  <li><a onClick={() => scrollToSection("team")}>Team</a></li>
  <li>
    <button class="join-button">Join Us</button>
  </li>
</ul>
        </div>
      </nav>
      <div id="home" className="home-component">
        <div className="overlay">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              opacity,
            }}
          />
          <div className="black-overlay" />
          <div className="arrows">
            <button onClick={() => handleArrowClick("prev")}>‹</button>
            <button onClick={() => handleArrowClick("next")}>›</button>
          </div>
          <div className="text-overlay">
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={`Try searching for ${words[wordIndex]}`}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;