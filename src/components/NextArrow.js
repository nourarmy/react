import React from 'react';

const NextArrow = (props) => (
  <div className="next-arrow" onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color='white' cursor= 'pointer'>
      <path fill="currentColor" d="M8 5l8 7-8 7z" />
    </svg>
  </div>
);

export default NextArrow;