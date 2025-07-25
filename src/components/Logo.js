// src/components/Logo.js
import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ isHome }) => {
  return (
    <div className="logo">
      <img
        className="logo_fedes"
        src={
          isHome
            ? 'https://fedes.ai/fedes-consultora/landing/logoBlanco.png'
            : 'https://fedes.ai/fedes-consultora/privacidad/logoFedesNegro.svg'
        }
        alt="Logotipo de Fedes Consultora"
        loading="lazy"
      />
    </div>
  );
};

Logo.propTypes = {
  isHome: PropTypes.bool,
};

export default Logo;
