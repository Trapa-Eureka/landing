import React from 'react';
import "./Hero.css";

const Hero = ({imageSrc}) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="testImage" className="hero__image" />
      <h1 className="hero__title">made simple landing</h1>
    </div>
  );
};

export default Hero;