import React, { useState, useEffect } from 'react';
import './css/Preloader.css';

const Loader = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Change image every 1 second
      return () => clearInterval(interval);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="loader-container"><p>No images available</p></div>;
  }

  return (
    <div className="loader-container">
      <img 
        src={images[currentImageIndex]} 
        alt="Loading animation" 
        className="loader-image"
      />
    </div>
  );
};

export default Loader;
