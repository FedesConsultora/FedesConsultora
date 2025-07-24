// src/components/ContenedorFedeChironi.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContenedorFedeChironi = () => {
  const { t } = useTranslation();

  return (
    <article className="contenedorFedeChironi">
      
      <ul className="listaFede">
        <li>{t('fede_chironi_1')}</li>
        <li>{t('fede_chironi_2')}</li>
        <li>{t('fede_chironi_3')}</li>
        <li>{t('fede_chironi_4')}</li>
      </ul>
      <a href="https://www.linkedin.com/in/federicochironi/">
        <div className="contenedorBotonLinkedin">
          {t('view_linkedin')}
          <img
            src="https://fedes.ai/fedes-consultora/landing/flechaDerecha.svg"
            alt={t('arrow_right')}
            loading="lazy"
          />
        </div>
      </a>
      <div className="nombreContainer">
        <h3>FEDERICO CHIRONI</h3>
        <p>CoFounder y CEO</p>
        <img
          src="https://fedes.ai/fedes-consultora/landing/recuadro_semicircular.svg"
          alt={t('semi_circular_frame')}
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default ContenedorFedeChironi;
