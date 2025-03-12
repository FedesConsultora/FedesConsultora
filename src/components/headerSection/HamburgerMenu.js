// src/components/HamburgerMenu.js
import React from 'react';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ toggleMenu, isHome }) => {
  return (
    <div className="menuHamburguesa" onClick={toggleMenu}>
      <img
        src={
          isHome
            ? 'https://fedesagency.com/fedes-consultora/landing/menuHamburguesa.svg'
            : 'https://fedesagency.com/fedes-consultora/landing/menuHamburgesaNegro.svg'
        }
        alt="Menú de navegación hamburguesa de Fedes Consultora"
        loading="lazy"
      />
    </div>
  );
};

HamburgerMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isHome: PropTypes.bool,
};

export default HamburgerMenu;
