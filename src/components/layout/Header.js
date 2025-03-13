// src/layout/Header.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom'; // <-- Aquí
import Logo from '../Logo';
import Navigation from '../headerSection/Navigation';
import SocialMedia from '../SocialMedia';
import UserMenu from '../headerSection/UserMenu';
import HamburgerMenu from '../headerSection/HamburgerMenu';
import SocialLinks from '../footerSection/SocialLinks';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate(); // <-- Hook para navegar

  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para navegar y cerrar menú
  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  return (
    <header className={`header ${isHome ? 'header--home' : 'header--other'}`}>
      <aside className="header_sup">
        <div className='logoYnav'>
          <a href="/">
            <Logo isHome={isHome} />
          </a>
          <nav className="navegacion-horizontal">
            <Navigation />
          </nav>
        </div>
        
        <div className="redesYlogin">
          <SocialMedia isHome={isHome} />
          <UserMenu />
        </div>
        <HamburgerMenu isHome={isHome} toggleMenu={toggleMenu} />
      </aside>

      <div className={`contenedorMenuAbierto ${menuOpen ? 'menu-visible' : ''}`}>
        <article className="logoYclose">
          <img
            className="logo_fedes"
            src="https://fedesagency.com/fedes-consultora/landing/logoBlanco.png"
            alt="Logotipo de Fedes Consultora"
          />
          <img
            className="close-menu"
            src="https://fedesagency.com/fedes-consultora/landing/close.svg"
            alt={t('close_menu')}
            onClick={toggleMenu}
          />
        </article>
        
        {/* Menú vertical con navegación */}
        <ul className="navegacion-vertical">
          <li onClick={() => handleNavClick('/')}>
            {t('home')}
          </li>
          <li onClick={() => handleNavClick('/nosotros')}>
            {t('about_us')}
          </li>
          <li onClick={() => handleNavClick('/servicios')}>
            {t('services')}
          </li>
          <li onClick={() => handleNavClick('/galeria')}>
            {t('galery')}
          </li>
          <li onClick={() => handleNavClick('/contactanos')}>
            {t('contact')}
          </li>
          <li onClick={() => handleNavClick('/blog')}>
            {t('media')}
          </li>
        </ul>

        <div className="redesYlogin">
          <SocialLinks />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
