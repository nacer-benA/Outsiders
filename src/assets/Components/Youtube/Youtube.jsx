import React from 'react'
import './Youtube.css'
import youtube_img from './../../img/Preview.png'
import youtube_icon from './../../img/About_icon.png'


const Youtube = ({setPlayState}) => {
  return (
    <div className='youtube'>
        <div className="youtube-left">
            <img src={youtube_img} alt="preview de video youtube" className='youtube-img' />
            <img src={youtube_icon} alt="icone de lecture youtube" className='youtube-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="youtube-right">
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

export default Youtube