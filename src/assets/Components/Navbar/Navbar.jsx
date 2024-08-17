import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/Logo16-9.png';
import menu_burger from '../../img/Menu_burger.png';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 670 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Notre vision</Link></li>
        <li><Link to="/">Interviews</Link></li>
        <li><Link to="/pack">Nos packs</Link></li>
        <li><Link to="/about">A propos</Link></li>
        <li><Link to="/contact" className='btn'>Nous contacter</Link></li>
      </ul>
      <img src={menu_burger} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};
