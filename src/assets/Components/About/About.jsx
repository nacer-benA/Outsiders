import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom

import './About.css';
import CeoImage from '../../img/Ceo.jpg';
import IconLike from '../../img/Icon_like.png';
import IconLight from '../../img/Icon_light.png';
import IconLvlup from '../../img/Icon_lvlup.png';
import IconValid from '../../img/Icon_valid.png';

const About = () => {
  return (
    <>
      <div className="first-box">
        <img src={CeoImage} alt="Image de la CEO" />
        <div className="box-content">
          <h1>La passion au centre de tout</h1>
          
          <p>
          Pour les initiés, Outsiders se révèlera comme une référence sociologique de la déviance selon Howard S. Becker. En immersion dans un club de Jazz, Becker analysera la déviance comme une construction sociale dénuée de fondement objectif autre qu’un manquement à la norme.
        </p>

        <p>
          C’est précisément ce que le cabinet défend.
        </p>

        <p>
          De formation sociologique, j’ai effectué une recherche sur l’orientation subie des élèves de lycées professionnels qui se voyaient contraints de subir une double imposition sociale : l’absence de choix d’orientation et le placement en filière « hygiène des locaux », métier décrié socialement.
        </p>

        <p>
          Cette recherche, riche d’une immersion de terrain de quatre ans, m’a ainsi permis d’approcher les mécanismes de construction identitaire de ces jeunes en apparence dénués de tout capital social et culturel au sens Bourdieusien et dont l’habitus cloisonnait les pratiques.
        </p>

        <p>
          J’ai ainsi travaillé en tant que chargée de mission sur le dispositif européen « Garantie Jeunes » en créant des programmes innovants en faveur de l’insertion des jeunes.
        </p>

        <p>
          Cette expérience fut d’autant plus enrichissante qu’elle m’a permis de jouer de ma compétence de photographe pour la mise en place des projets par le long travail de déconstruction des représentations, aussi bien du côté des jeunes que du côté des entreprises.
        </p>

        <p>
          Véritable outil, la photographie est pour moi une manière de restituer la beauté du monde que je perçois et par extension, celle portée et bien souvent ignorée par chacun d’entre nous.
        </p>

        <p>
          Cette mise en lumière, qu’elle passe par le biais de la photographie ou des programmes, va au-delà d’un simple engagement professionnel, c’est une philosophie de vie.
        </p>
        </div>
      </div>

      <div className="second-box">
        <h1>Ce que nous faisons</h1>

        <div className="cards-container">
          <div className="card">
            <img src={IconLike} alt="" />
            <h2>Conseil en innovation sociale
            </h2>
            <p>Outsiders est un cabinet de conseil en innovation sociale.
            Nous accompagnons les entreprises dans leur stratégie d’engagement et la mise en place du volet R.S.E.</p>
            </div>
          <div className="card">
            <img src={IconLight} alt="" />
            <h2>Le workshop Presse Féminine
            </h2>
            <p>Au plus près des besoins de terrain, nous proposons une solution clé en main aux entreprises qui souhaitent s’engager auprès des populations éloignées de l’emploi; le workshop Presse Féminine.</p>
            </div>
          <div className="card">
            <img src={IconLvlup} alt="" />
            <h2>L’empowerment</h2>
            <p>Véritable ode à l’empowerment, ce programme dédié exclusivement aux femmes éloignées de l’emploi et issues des quartiers prioritaires de la ville ou des zones rurales, remobilise vers une meilleure version de soi.</p>
            </div>
          <div className="card">
            <img src={IconValid} alt="" />
            <h2>Faites de vos échecs une force</h2>
            <p>L’emploi n’est plus l’unique cible, mais un des objectifs.
Nous replaçons ces femmes au coeur de leur processus décisionnel, afin de leur permettre de faire de leurs singularité un atout et de leurs échecs une force.</p>
            </div>
        </div>
      </div>
      <div className="link">
        <p>VOUS ÊTES UNE ENTREPRISE ET VOUS SOUHAITEZ SOUTENIR CE PROGRAMME ?</p>
        <button><Link to="/contact">contactez-nous</Link></button> 
      </div>
    </>
  );
}

export default About;
