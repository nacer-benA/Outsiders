import React, { useState } from 'react'
import './Campus.css'
import campus_img1 from './../../Campus_img1.png'
import campus_img2 from './../../Campus_img2.png'
import campus_img3 from './../../Campus_img3.png'
import campus_img4 from './../../Campus_img4.png'
import plaquette_outsiders from './../../Plaquette_outsiders.pdf'
import modal_img1 from './../../Modal_img1.png'; 
import modal_img2 from './../../Modal_img2.png';
import modal_img3 from './../../Modal_img3.png';
import modal_img4 from './../../Modal_img4.png';

const Campus = () => {

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
  )
}

export default Campus

/* rafce */