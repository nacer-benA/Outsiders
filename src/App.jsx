import React, { useEffect, useState } from 'react'
import { Navbar } from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Campus from './assets/Components/Campus/Campus'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Contact from './assets/Components/Contact/Contact'
import Footer from './assets/Components/Footer/Footer'
import VideoPlayer from './assets/Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Nos orientations' title="LIBERE L'OUTSIDERS QUI EST EN TOI "/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Nos packs' title='Ce que nous proposons'/>
        <Campus/>
        <Title subtitle='Témoignages' title="Ce qu'elles en pensent"/>
        <Testimonials/>
        <Title subtitle='Contactez nous' title='Nous restons à votre écoute'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
/* rafce */