import React from 'react'
import './About.css'
import about_img from './../../Preview.png'
import about_icon from './../../About_icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="preview de video youtube" className='about-img' />
            <img src={about_icon} alt="icone de lecture youtube" className='about-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>INTERVIEWS</h3>
            <h2>Des Profils Inspirants</h2>
            <p>Régulièrement, nous publions des vidéos inspirantes qui prouvent que la réussite est possible 
              quels que soient les obstacles rencontrés.</p>
            <p>Elles présentent des parcours professionnels variés, incitant les spectateurs à croire en leurs capacités.</p>
            <p>Elles fournissent des conseils pratiques pour optimiser la recherche d'emploi et acquérir des compétences clés.</p>
            <a href="https://www.youtube.com/channel/UCqT5bYirxVk42B_O_IEQekQ/?sub_confirmation=1" target="_blank">
            <button className='btn subscribe'>REJOIGNEZ NOUS</button>
            </a>
        </div>
        

    </div>
  )
}

export default About