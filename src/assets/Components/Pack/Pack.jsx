import React, { useState } from 'react'
import './Pack.css'
import campus_img2 from './../../img/Campus_img2.png'
import campus_img1 from './../../img/Campus_img1.png'
import campus_img3 from './../../img/Campus_img3.png'
import campus_img4 from './../../img/Campus_img4.png'
import plaquette_outsiders from './../../img/Plaquette_outsiders.pdf'
import modal_img1 from './../../img/Modal_img1.png'; 
import modal_img2 from './../../img/Modal_img2.png';
import modal_img3 from './../../img/Modal_img3.png';
import modal_img4 from './../../img/Modal_img4.png';

const Pack = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <div className="pack-description">
        <h3>La mise en  emploi n’est pas que le résultat d’un simple matching entre une offre d’emploi et un candidat.</h3>
        <p>C’est bien plus.</p>
        <p>Pour ceux qui en sont éloignés, l’absence de connaissance des codes est bien souvent une charge symbolique trop forte à porter.</p>
        <p>L’éventualité d’un nouvel échec plonge souvent les candidats dans une inertie sans fin.</p>
      </div>
      <div className="intro-pack">
        <div className="box-intro">
          <h3>APPRENDRE À TRANSFORMER LES ÉCHECS</h3>
          <h2>EN CARBURANT</h2>
          <p>C'est pour cela que nous travaillons depuis de nombreuses années à innover en matière d'accompagnement vers l'emploi .</p>
          <p>Nous valorisons l'échec pour libérer les potentiels et les singularités.</p>
          <p>Accompagner de futurs candidats solides dans leurs singularités et clairs sur leurs objectifs ne fera qu'accroitre leur résilience et leur détermination.</p>
        </div>
      </div>
      <div className='campus'>
          <div className="gallery">
              <img src={campus_img1} alt="" onClick={() => openModal(modal_img1)}/>
              <img src={campus_img2} alt="" onClick={() => openModal(modal_img2)}/>
              <img src={campus_img3} alt="" onClick={() => openModal(modal_img3)}/>
              <img src={campus_img4} alt="" onClick={() => openModal(modal_img4)}/>
          </div>
          <a href={plaquette_outsiders} download>
          <button className='btn dark-btn'>Télécharger la plaquette des prix</button>
          </a>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={modalImage} alt="Modal content" />
              </div>
            </div>
          )}
      </div>
    </>
  )
}

export default Pack

/* rafce */