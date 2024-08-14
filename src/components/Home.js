import React, { useState, useEffect } from "react";
import "./css/home.css";
import "./css/search-bar.css";
import image1 from "./img/a.jpg";
import image2 from "./img/b.jpg";
import image3 from "./img/c.jpg";
import logo from "./img/imc.png"; // Use import for image

const images = [image1, image2, image3];
const words = ["Diversity", "Passion", "Motivation", "IMC"];

const HomeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [wordIndex, setWordIndex] = useState(-1);

  const handleArrowClick = (direction) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + (direction === "next" ? 1 : -1) + images.length) % images.length);
      setOpacity(1);
    }, 500);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1);
      }, 600); // Delay the image change to allow for the fade effect
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <ul className="navbar-nav">
            <li><a href="#" onClick={() => scrollToSection("home")}>Home</a></li>
            <li><a href="#" onClick={() => scrollToSection("about")}>About</a></li>
            <li><a href="#" onClick={() => scrollToSection("services")}>Services</a></li>
            <li><a href="#" onClick={() => scrollToSection("events")}>Events</a></li>
            <li><a href="#" onClick={() => scrollToSection("team")}>Team</a></li>
            <li><a href="#" onClick={() => scrollToSection("join")}>Join</a></li>
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
          <div className="arrows">
            <button onClick={() => handleArrowClick("prev")}>‹</button>
            <button onClick={() => handleArrowClick("next")}>›</button>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block__container block__container--narrow">
          <div className="block__main">
            <form
              className="search"
              method="get"
              action="/search/?q="
              autoComplete="off"
              id="searchbox_002216470633262645991:rvefancvpay"
            >
              <label className="search__label">
                <span className="screen-reader-text">Search</span>
                <input
                  className="search__input"
                  placeholder=" "
                  type="text"
                  name="q"
                  autoComplete="off"
                />
                <span className="search__placeholder">
                  <span className="search__placeholder__static">Try searching for </span>
                  <span className="search__placeholder__cycle search__placeholder__cycle-animated">
                    {words[wordIndex]}
                  </span>
                </span>
                <input type="hidden" name="cx" value="002216470633262645991:rvefancvpay" />
                <input type="hidden" name="cof" value="FORID:11" />
              </label>
              <span className="svg svg--search button__icon">
                {/* Add your search icon SVG here */}
              </span>
              <div className="search__button">
                <button className="button button--blue">
                  <span className="button__label">Search</span>
                  <span className="svg svg--arrow-right button__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <path d="M70.936 29.495L100 49.499 71.651 70.505l-.322-18.229L0 52.278v-4.102l71.26-.002z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
