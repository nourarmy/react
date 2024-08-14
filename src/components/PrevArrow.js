import React from 'react';

const PrevArrow = (props) => (
  <div className="prev-arrow" onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color='white'>
      <path fill="currentColor" d="M16 19l-8-7 8-7z" />
    </svg>
  </div>
);

export default PrevArrow;
