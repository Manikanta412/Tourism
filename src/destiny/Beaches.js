import React, { useState } from 'react';
import './Beaches.css'; // Import the CSS file
import img9 from'./pics/Vijayas.jpeg';

const Beaches = () => {
    const images = ['./pics/Vijayas.jpeg']; // Replace with your image paths
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="slider-container">
            <div className="slide">
                <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Beaches;
