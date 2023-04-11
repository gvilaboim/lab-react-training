import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
function App() {
  /*  <Dice/>
      <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>

<NumbersTable limit={12}/>

<Facebook/>
<SignupPage/>
*/
  return (
    <div className="App">
<RGBColorPicker/>
    </div>
  );
  
}

export default App;
