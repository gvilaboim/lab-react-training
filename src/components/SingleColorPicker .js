import React, { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div style={{display: 'flex'}}>
     <div  style={{  width: '50px', height: '50px',  backgroundColor: `rgb(${color === 'r' ? value : 0}, ${  color === 'g' ? value : 0  }, ${color === 'b' ? value : 0})`,  }}></div>
      <label htmlFor={color}>{color.toUpperCase()}:</label>
      <input
        type="number"
        id={color}
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
};

export default SingleColorPicker;