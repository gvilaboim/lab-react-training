import React, { useState } from 'react'
import SingleColorPicker from './SingleColorPicker ';

const RGBColorPicker = () => {
    const [rgbValues, setRgbValues] = useState({ r: 0, g: 0, b: 0 });

    const handleColorChange = (color, value) => {
      setRgbValues({ ...rgbValues, [color]: value });
    };
  
    return (
      <div>
        <SingleColorPicker
          color="r"
          value={rgbValues.r}
          onChange={(value) => handleColorChange('r', value)}
        />
        <SingleColorPicker
          color="g"
          value={rgbValues.g}
          onChange={(value) => handleColorChange('g', value)}
        />
        <SingleColorPicker
          color="b"
          value={rgbValues.b}
          onChange={(value) => handleColorChange('b', value)}
        />
        <span>RGB: {rgbValues.r}, {rgbValues.g}, {rgbValues.b} </span>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`,
          }}
        ></div>
      </div>
    );
}

export default RGBColorPicker