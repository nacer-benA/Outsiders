import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Chiffres.css';

const Chiffres = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 }
  };

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        const controls = { current: 0 };
        const animate = () => {
          if (controls.current < value) {
            controls.current += 1;
            setCount(controls.current);
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [value, inView]);

    return <span>{count}</span>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className='container-numbers' ref={ref}>
      <motion.div
        className='card'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={cardVariants}
      >
        <p className='number first-number'><AnimatedNumber value={12} /></p>
        <p className='sentence'>années d'expérience</p>
      </motion.div>
      <motion.div
        className='card'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.3 }}
        variants={cardVariants}
      >
        <p className='number second-number'><AnimatedNumber value={4} /></p>
        <p className='sentence'>packs de formations</p>
      </motion.div>
      <motion.div
        className='card'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={cardVariants}
      >
        <p className='number third-number'><AnimatedNumber value={449} /></p>
        <p className='sentence'>personnes accompagnées</p>
      </motion.div>
      <motion.div
        className='card'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.7 }}
        variants={cardVariants}
      >
        <p className='number fourth-number'><AnimatedNumber value={280} /></p>
        <p className='sentence'>heures de formation</p>
      </motion.div>
    </div>
  );
};

export default Chiffres;
