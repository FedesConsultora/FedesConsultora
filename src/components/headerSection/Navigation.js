import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ isVertical }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <nav className={`navigation ${isVertical ? 'vertical' : 'horizontal'}`}>
      <ul className="navegacion">
        <li onClick={() => navigate('/')}>{t('home')}</li>
        <li onClick={() => navigate('/nosotros')}>{t('about_us')}</li>
        <li onClick={() => navigate('/servicios')}>{t('services')}</li>
        <li onClick={() => navigate('/galeria')}>{t('galery')}</li>
        <li onClick={() => navigate('/contactanos')}>{t('contact')}</li>
        <li onClick={() => navigate('/blog')}>{t('media')}</li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isVertical: PropTypes.bool,
};

export default Navigation;