import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Navigation = ({ isVertical }) => {
  const { t } = useTranslation(); // Hook de traducción

  // Función para manejar el desplazamiento suave
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia la sección
    }
  };

  return (
    <nav className={`navigation ${isVertical ? 'vertical' : 'horizontal'}`}>
      <ul className="navegacion">
        <li onClick={() => scrollToSection('home')}>{t('home')}</li>
        <li onClick={() => scrollToSection('sobreFedes_scroll')}>{t('about_us')}</li>
        <li onClick={() => scrollToSection('servicios_scroll')}>{t('services')}</li>
        <li onClick={() => scrollToSection('casoDeExitoScroll')}>{t('success_stories')}</li>
        <li onClick={() => scrollToSection('contactoScroll')}>{t('contact')}</li>
        <li onClick={() => scrollToSection('prensaScroll')}>{t('media')}</li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isVertical: PropTypes.bool,
};

export default Navigation;
