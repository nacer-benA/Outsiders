import React, { useRef } from 'react'
import './Testimonials.css'
import white_arrow from './../../White_arrow.png'
import back_arrow from './../../Back_arrow.png'
import slide_img1 from './../../Slide-img1.jpg'
import slide_img2 from './../../Slide-img2.jpg'
import slide_img3 from './../../Slide-img3.jpg'
import slide_img4 from './../../Slide-img4.jpg'

const Testimonials = () => {

const slider = useRef();
let tx = 0;
const slideForward = () =>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () =>{
    if(tx < 0){
        tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
        <img src={white_arrow} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_arrow} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={slide_img1} alt="" />
                            <div>
                                <h3>Célia A.
                                </h3>
                                <span>Paris, France</span>
                            </div>
                        </div>
                        <p>J’ai été inspirée le premier jour comme jamais je ne l’ai été dans ma vie et jusque’à maintenant! J’ai appris à visualiser les choses, à me structurer, à développer mes compétences pour le pas rester dans la peur.
                        Affronter et saisir les opportunités. Me surpasser encore et encore</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                            <div className="user-info">
                                <img src={slide_img2} alt="" />
                                <div>
                                    <h3>Selin C.
                                    </h3>
                                    <span>Paris, France</span>
                                </div>
                            </div>
                            <p>Ce qui a changé chez moi c’est ma détermination et mon courage.
                                Je n’ai plus peur d’échouer ou de me jeter à l’eau pour accomplir mes objectifs.
                                Je me sens plus forte, je veux avancer et je vais avancer sans m’arrêter</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={slide_img3} alt="" />
                            <div>
                                <h3>Beyzanur D.
                                </h3>
                                <span>Paris, France</span>
                            </div>
                        </div>
                        <p>Laïla? Elle ne vous lâche pas! Elle vous met la pression!
                        Grâce à ça, j’ai appris beaucoup et si je pouvais, je referais cette formation</p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={slide_img4} alt="" />
                            <div>
                                <h3>Aissetou D.
                                </h3>
                                <span>Paris, France</span>
                            </div>
                        </div>
                        <p>J’ai appris qu’il fallait parfois se forcer et sortir de sa zone de confort pour avancer.</p>
                    </div>
                </li>
            </ul>
        </div>
        

    </div>
  )
}

export default Testimonials