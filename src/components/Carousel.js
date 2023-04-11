import React, { useState } from 'react';

const Carousel = ({images}) => {
  const [imageNumber, setImageNumber] = useState(0);

  const next = () => {  
    if (imageNumber + 1 < images.length) {
      setImageNumber(imageNumber + 1);
    } else {
      setImageNumber(0);
    }
  };

  const back = () => {  
    if (imageNumber - 1 >= 0) {
      setImageNumber(imageNumber - 1);
    } else {
      setImageNumber(images.length - 1);
    }
  };

  return (
    <div>
      <img src={images[imageNumber]} width={100} alt="carousel" />
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Carousel;