import React from 'react';
import './Vijaya.css';
import img9 from'./pics/Vijayas.jpeg';


const Vijaya = () => {
  return (
    <div className="containers">
     

      {/* Image Followed by Text */}
      <div className="image-with-text">
       <img src={img9} alt='araku'/>
        <p>Araku Valley is a hill station in Visakhapatnam district in the Indian state of Andhra Pradesh, lying 111 km west of Visakhapatnam city. This place is often referred to as Ooty of Andhra. It is a valley in the Eastern Ghats inhabited by different tribes, mainly Araku Tribes.</p>
        
      </div>
    </div>
  );
};

export default Vijaya;