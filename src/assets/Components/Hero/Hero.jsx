import React from 'react'
import {Link} from 'react-scroll';

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>OUTSIDERS CONSULTING</h1>
            <p>Cabinet de conseil en Innovation Sociale
            Créateur de valeur humaine ajoutée</p>
            <button className="btn"><Link to='program' smooth={true} offset={-280} duration={700}>
            Libère l’Outsiders qui est en toi</Link>
            </button>
        </div>
    </div>
  )
}

export default Hero