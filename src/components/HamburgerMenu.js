// src/components/HamburgerMenu.js
import React from 'react';

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="menuHamburguesa" onClick={toggleMenu}>
      <img
        src="https://fedesagency.com/fedes-consultora/landing/menuHamburguesa.svg"
        alt="Menú de navegación hamburguesa de Fedes Consultora"
        loading="lazy"
      />
    </div>
  );
};

export default HamburgerMenu;
