import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Orientations.css';

const Orientations = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const orientations = [
    'EMPLOYABILITE',
    'REMOBILISATION',
    'INSERTION',
    'NEET',
    'EMPOWERMENT',
    'EGALITE DES CHANCES',
    'DIVERSITE',
    'RSE'
  ];

  const generateRandomDelay = (index) => {
    return Math.random() * 0.5 + 0.1 * index; // Random delay between 0.1s and 0.6s
  };

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.1 } // Adjust this value for different visibility thresholds
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='container-orientations' ref={containerRef}>
      {orientations.map((orientation, index) => (
        <motion.div
          key={index}
          className={`card-border position-${index + 1}`}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: generateRandomDelay(index) }}
          variants={cardVariants}
        >
          <h2 className='orientation'>{orientation}</h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Orientations;
