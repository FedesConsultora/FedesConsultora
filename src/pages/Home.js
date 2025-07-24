// src/pages/Home.js
import React from 'react';
import HeaderInfoSection from '../components/headerSection/HeaderInfoSection.js';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeaderInfoSection />
      <article className="flechaAbajo">
        <img 
          src="https://fedes.ai/fedes-consultora/landing/flecha_abajo.svg" 
          alt={t('down_arrow')}
          loading="lazy"
        />
      </article>
    </div>
  );
};

export default Home;
