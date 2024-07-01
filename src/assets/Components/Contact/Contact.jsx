import React from 'react'
import './Contact.css'
import contact_icon from './../../img/Contact_icon.png'
import linkedin_icon from './../../img/Linkedin_icon.png'
import youtube_icon from './../../img/Youtube_icon.png'
import instagram_icon from './../../img/Instagram_icon.png'
import tiktok_icon from './../../img/Tiktok_icon.png'

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2857c34c-0f46-4088-8af7-563f02f8ac38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès");
      event.target.reset();
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Contactez nous <img src={contact_icon} alt="" /></h3>
            <p>Nous sommes à votre disposition pour toute question, demande d'informations ou collaboration.
            </p>
            <p>Pour obtenir un devis personnalisé adapté à vos besoins spécifiques, veuillez nous fournir autant de détails que possible. 
              Notre équipe se fera un plaisir de vous accompagner dans la réalisation de vos projets.</p>
            <ul>
                <li> <a href="https://www.linkedin.com/in/la%C3%AFla-ben-achouba-977813111/" target="_blank"><img src={linkedin_icon} alt="linkedin icon" /></a> </li>
                <li> <a href="https://www.youtube.com/channel/UCqT5bYirxVk42B_O_IEQekQ" target="_blank"><img src={youtube_icon} alt="youtube icon" /></a> </li>
                <li> <a href="https://www.instagram.com/outsiders.ctg/" target="_blank"><img src={instagram_icon} alt="instagram icon" /></a> </li>
                <li> <a href="https://www.tiktok.com/@outsiderslacademie?_t=8ndoVhXBYpO&_r=1" target="_blank"><img src={tiktok_icon} alt="tiktok icon" /></a> </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Votre Nom</label>
                <input type="text" name='name' placeholder='Ecrivez votre nom' required/>
                <label>Numéro de téléphone</label>
                <input type="tel" name='phone' placeholder='Entrez votre numéro' required/>
                <label>Ecrivez votre message</label>
                <textarea name="message" id="" ows='6' placeholder='Votre message' required></textarea>
                <button type='submit' className='btn dark-btn'>Envoyez</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact