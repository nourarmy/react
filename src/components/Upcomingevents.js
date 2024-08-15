import React, { useState, useEffect, useRef } from 'react';
import './css/past.css';

const videos = [
  {
    url: 'https://arfaouisabeur.github.io/imc/images/IMC%20TALK%20AFTER%20MOVIE.m4v',
    title: 'IMC Talk',
    description: `An exciting event where we hosted training sessions and activities 
    to sharpen both the soft and hard skills in our dear members.`
  },
  {
    url: 'https://arfaouisabeur.github.io/imc/images/382731449_1479028076270410_985758918544048855_n.mp4',
    title: 'Coding Universe',
    description: `A hackathon created by IMC, where we hosted a competition 
    that contains interesting awards, along with exciting training sessions.`
  },
  {
    url: 'https://arfaouisabeur.github.io/imc/images/365053195_1444791223042111_267495899980525427_n.mp4',
    title: 'Esgitech Partnership',
    description: `Esgitech is the 1st private university in Tunisia that is specialized 
    in computer science, it helps you to launch a career offering a favorable environment.`
  }
];

const Pastevents = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(videoElement);

      return () => observer.disconnect();
    } else {
      videoElement.play();
    }
  }, []);

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="event-section">
      <div className="text-container">
        <h2>Past Events</h2>
      </div>
      <div className="video-container">
        <video className="video" ref={videoRef} src={videos[currentVideoIndex].url} controls />
        <div className="overlay">
          <button className="prev-button" onClick={handlePrevClick}>
            <span className="arrow">&#8592;</span>
          </button>
          <h2 className="title1">{videos[currentVideoIndex].title}</h2>
          <p className="description">{videos[currentVideoIndex].description}</p>
          <div className="wave"></div>
          <button className="next-button" onClick={handleNextClick}>
            <span className="arrow">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pastevents;
