import React from 'react';
import '../../App.css';
import Canvas from '../Canvas';
import { Text } from 'react'


export default function Services() {
  const [drive, setDrive] = React.useState({image_coded: 'Blank equation'});

  const sendDataToParent = (returned_value) => {
    setDrive({image_coded: returned_value});
  };


  return (
    <div>
      <h1 className='services'>SERVICES</h1>
      <Canvas sendDataToParent={sendDataToParent}/>
    </div>
  );
}





