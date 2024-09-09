// src/layout/Header.js
import React, { useState } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import SocialMedia from '../SocialMedia';
import UserMenu from '../UserMenu';
import HamburgerMenu from '../HamburgerMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <aside className="header_sup">
        <Logo />
        {/* La navegación y redes sociales se mostrarán directamente en desktop */}
        <nav className="navegacion-horizontal">
          <Navigation />
        </nav>
        <div className="redesYlogin">
          <SocialMedia />
          <UserMenu />
        </div>
        <HamburgerMenu toggleMenu={toggleMenu} />
      </aside>

      <div className={`contenedorMenuAbierto ${menuOpen ? 'menu-visible' : ''}`}>
        <article className="logoYclose">
          <img className="logo_fedes" src="https://fedesagency.com/fedes-consultora/landing/logoBlanco.png" alt="Logotipo de Fedes Consultora" />
          <img className="close-menu" src="https://fedesagency.com/fedes-consultora/landing/close.svg" alt="Cerrar menú" onClick={toggleMenu} />
        </article>
        <ul className="navegacion-vertical">
          <li>INICIO</li>
          <li>SOBRE NOSOTROS</li>
          <li>SERVICIOS</li>
          <li>CASOS DE ÉXITO</li>
          <li>CONTACTO</li>
          <li>PRENSA</li>
        </ul>
        <div className="redesYlogin">
          <SocialMedia />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

