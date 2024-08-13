import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import Programs from './assets/Components/Programs/Programs';
import Title from './assets/Components/Title/Title';
import Youtube from './assets/Components/Youtube/Youtube';
import Campus from './assets/Components/Campus/Campus';
import Testimonials from './assets/Components/Testimonials/Testimonials';
import Contact from './assets/Components/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';
import VideoPlayer from './assets/Components/VideoPlayer/VideoPlayer';
import Chiffres from './assets/Components/Chiffres/Chiffres';
import Orientations from './assets/Components/Orientations/Orientations';
import About from './assets/Components/About/About';

import heroImage1 from './assets/img/Hero.jpg';
import heroImage2 from './assets/img/Hero.jpg';
import heroImage3 from './assets/img/Preview.png';

const App = () => {
  const basename = import.meta.env.MODE === 'production' ? '/Outsiders' : '';

  const [playState, setPlayState] = useState(false);

  return (
    <Router basename={basename}>
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
              <Title subtitle='Nos packs' title='Ce que nous proposons' />
              <Campus />
              <Title subtitle='Témoignages' title="Ce qu'elles en pensent" />
              <Testimonials />
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </>
        } />
        <Route path="/about" element={
          <>
            <Hero 
              title="A Propos de nous" 
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
              title="Contactez-nous" 
              text="Nous serions ravis de discuter de votre projet. N'hésitez pas à nous contacter pour plus d'informations." 
              buttonText="Nous contacter"
              backgroundImage={heroImage2}
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
