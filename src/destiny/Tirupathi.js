import React from "react";
import './Tirupathi.css';
import img7 from './pics/Tiru.jpg'; // Replace 'path_to_your_image.jpg' with your image file

const Tirupathi = () => {
  return (
    <div>
      <h1 className="heading">TIRUPATHI</h1>
      <div className="container">
        <div className="text-contents">
          <h1>Matter for the second image</h1>
          <p>Description for the second image...</p>
          {/* Add more content for the second image as needed */}
        </div>
        <img src={img7} alt="Tirupathi" className="img" />
        <div className="text-content">
          <h1>tirupathi is one of the most popular places in India</h1>
          <p>Additional content or description about Tirupathi...</p>
          {/* Add more content for the first image as needed */}
        </div>
        <img src={img7} alt="Tirupathi" className="image" />
      </div>
    </div>
  );
};

export default Tirupathi;
