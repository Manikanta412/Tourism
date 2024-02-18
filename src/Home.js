import React from 'react';
import './Home.css';
import img1 from './images/homeimg.jpg';
import Counter from './Counter';


const Home = () => {
  return (
    <div className='home'>
      <div className="image-container">
        <img src={img1} alt="Home" />
        <div className="website-name">
          <h1>EXPLORE AND ENJOY</h1>
        </div>
      </div>
  
      <div className="blog-cards-container">
        {/* Example blog cards */}
        <div className="blog-card">
          <h2>Water falls</h2>
          <p>Blog content goes here.</p>
          <a href='' className='button'>Beaches</a>
        </div>
        <div className="blog-card">
          <h2>Hill stations</h2>
          <p>Blog content goes here.</p>
          <a href='/bea' className='button'>More..</a>
        </div>
        <div className="blog-card">
          <h2>Beaches</h2>
          <p>Blog content goes here.</p>
          <a href='/beaches' className='button'>More..</a>
        </div>
        {/* Add more blog cards as needed */}
      </div>
      <Counter/>
    </div>
   
  );
};

export default Home;
