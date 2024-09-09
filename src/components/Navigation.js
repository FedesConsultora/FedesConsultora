// src/components/Navigation.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ isVertical }) => {
  return (
    <nav className={`navigation ${isVertical ? 'vertical' : 'horizontal'}`}>
      <ul className="navegacion">
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/about">SOBRE NOSOTROS</Link></li>
        <li><Link to="/services">SERVICIOS</Link></li>
        <li><Link to="/success-stories">CASOS DE ÉXITO</Link></li>
        <li><Link to="/contact">CONTACTO</Link></li>
        <li><Link to="/media">PRENSA</Link></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isVertical: PropTypes.bool
};

Navigation.defaultProps = {
  isVertical: false 
};

export default Navigation;
