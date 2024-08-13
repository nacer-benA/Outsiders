import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = ({ title, text, buttonText, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${backgroundImage})`,
  };

  return (
    <div className='hero container' style={heroStyle}>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="btn">
          <Link to='program' smooth={true} offset={-280} duration={700}>
            {buttonText}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
