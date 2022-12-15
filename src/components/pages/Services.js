import React from 'react';
import '../../App.css';
import Demo from '../Canvas';
import { Text } from 'react'


export default function Services() {
  const [drive, setDrive] = React.useState({image_coded: 'Blank equation'});

  const sendDataToParent = (returned_value) => {
    setDrive({image_coded: returned_value});
  };

  return (
    <div>
      <h1 className='services'>SERVICES</h1>
      <Demo sendDataToParent={sendDataToParent}/>
      {console.log('check', drive.image_coded)}
      <div className="My-text-boxs">
        {drive.image_coded}
      </div>
      {/* <textarea rows="10" cols="70">
        {drive.image_coded}</textarea>
      <h1 className='services'>hehe</h1> */}
    </div>
  );
}





