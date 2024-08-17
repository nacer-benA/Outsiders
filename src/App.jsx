import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import Programs from './assets/Components/Programs/Programs';
import Title from './assets/Components/Title/Title';
import Youtube from './assets/Components/Youtube/Youtube';
import Testimonials from './assets/Components/Testimonials/Testimonials';
import Contact from './assets/Components/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';
import VideoPlayer from './assets/Components/VideoPlayer/VideoPlayer';
import Chiffres from './assets/Components/Chiffres/Chiffres';
import Orientations from './assets/Components/Orientations/Orientations';
import About from './assets/Components/About/About';
import Pack from './assets/Components/Pack/Pack';

import heroImage1 from './assets/img/Hero.jpg';
import heroImage3 from './assets/img/About.png';
import heroImage4 from './assets/img/Contact.png';
import packImg from './assets/img/Pack.jpg';

import ScrollToTop from './assets/Components/ScrollToTop';


const App = () => {
  const basename = import.meta.env.MODE === 'production' ? '/Outsiders' : '';

  const [playState, setPlayState] = useState(false);

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero 
              title="OUTSIDERS CONSULTING" 
              text="Cabinet de conseil en Innovation Sociale. Créateur de valeur humaine ajoutée."
              buttonText="Libère l’Outsiders qui est en toi" 
              backgroundImage={heroImage1}
            />
            <div className="container">
              <Title subtitle='OUTSIDERS' title="EN QUELQUES CHIFFRES" />
              <Chiffres />
              <Title subtitle="LIBERE L'OUTSIDERS QUI EST EN TOI" title="Nos orientations" />
              <Orientations />
              <Title subtitle='Nos orientations' title="LIBERE L'OUTSIDERS QUI EST EN TOI " />
              <Programs />
              <Youtube setPlayState={setPlayState} />
              <Title subtitle='Témoignages' title="Ce qu'elles en pensent" />
              <Testimonials />
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </>
        } />
        <Route path="/pack" element={
          <>
            <Hero 
              title="Nos Pack" 
              text="CONSEIL EN INNOVATION SOCIALE" 
              buttonText=""
              backgroundImage={packImg}
            />
            <Pack />
            <Footer />
          </>
          } />
        <Route path="/about" element={
          <>
            <Hero 
              title="OUTSIDER" 
              text="CONSEIL EN INNOVATION SOCIALE" 
              buttonText=""
              backgroundImage={heroImage3}
            />
            <About />
            <Footer />
          </>
          } />
        <Route path="/contact" element={
          <>
            <Hero 
              title="Ensemble, créons de nouveaux projets" 
              buttonText="Nous contacter"
              backgroundImage={heroImage4}
            />
            <Contact />
            <Footer />
          </>
          } />
      </Routes>
    </Router>
  );
};

export default App;
