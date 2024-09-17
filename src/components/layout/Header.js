// src/layout/Header.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo';
import Navigation from '../headerSection/Navigation';
import SocialMedia from '../SocialMedia';
import UserMenu from '../headerSection/UserMenu';
import HamburgerMenu from '../headerSection/HamburgerMenu';
import HeaderInfoSection from '../headerSection/HeaderInfoSection';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 return (
    <header className="header">
      <aside className="header_sup">
        <a href="/">
          <Logo />
        </a>
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
          <img className="close-menu" src="https://fedesagency.com/fedes-consultora/landing/close.svg" alt={t('close_menu')} onClick={toggleMenu} />
        </article>
        <ul className="navegacion-vertical">
          <li>{t('home')}</li>
          <li>{t('about_us')}</li>
          <li>{t('services')}</li>
          <li>{t('success_stories')}</li>
          <li>{t('contact')}</li>
          <li>{t('media')}</li>
        </ul>
        <div className="redesYlogin">
          <SocialMedia />
          <UserMenu />
        </div>
      </div>
      <HeaderInfoSection />
      <article className="flechaAbajo">
        <img 
          src="https://fedesagency.com/fedes-consultora/landing/flecha_abajo.svg" 
          alt={t('down_arrow')}
          loading="lazy"
        />
      </article>
    </header>
  );
};

export default Header;
