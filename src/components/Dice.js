import React, { useState } from 'react';

const Dice = () => {
  let DiceArray = [
    '../images/dice-empty.png',
    '../images/dice1.png',
    '../images/dice2.png',
    '../images/dice3.png',
    '.../images/dice4.png',
    '../images/dice5.png',
    '../images/dice6.png']  

    const [img, setImg] = useState('../images/dice-empty.png');

    const handleClick = () => {  
      let random = Math.floor(Math.random() * 6 +1)
      setImg(DiceArray[0]);
      setTimeout(() => {
        setImg(DiceArray[random]);
      }, "1000");
    console.log("clicked")
     
    }

  return (
    <div>
      <img src={img}  width={200} onClick={handleClick}></img>

    </div>
  )
}

export default Dice