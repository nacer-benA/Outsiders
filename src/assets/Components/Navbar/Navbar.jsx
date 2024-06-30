import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll';

import './Navbar.css'
import logo from '../../Logo16-9.png'
import menu_burger from '../../Menu_burger.png'

export const Navbar = () => {

  const [sticky, setsticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 670 ? setsticky(true) : setsticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-270} duration={500}>Notre vision</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Interviews</Link></li>
        <li><Link to='campus' smooth={true} offset={-270} duration={500}>Nos packs</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-270} duration={500}>Témoignages</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Nous contacter</Link></li>
    </ul>
    <img src={menu_burger} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}
