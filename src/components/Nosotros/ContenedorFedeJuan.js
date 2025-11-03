// src/components/ContenedorFedeJuan.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContenedorFedeJuan = () => {
  const { t } = useTranslation();

  return (
    <article className="contenedorFedeJuan">
      <div className="nombreContainer">
        <h3>FEDERICO JUAN</h3>
        <p>CoFounder y CGO</p>
        <img
          src="https://fedesconsultora.com/fedes-consultora/landing/recuadro_semicircular.svg"
          alt={t('semi_circular_frame')}
          loading="lazy"
        />
      </div>
      <ul className="listaFede">
        <li>{t('fede_juan_1')}</li>
        <li>{t('fede_juan_2')}</li>
        <li>{t('fede_juan_3')}</li>
        <li>{t('fede_juan_4')}</li>
        <li>{t('fede_juan_5')}</li>
      </ul>
      <a href="https://www.linkedin.com/in/fede-juan/">
        <div className="contenedorBotonLinkedin">
          {t('view_linkedin')}
          <img
            src="https://fedesconsultora.com/fedes-consultora/landing/flechaDerecha.svg"
            alt={t('arrow_right')}
            loading="lazy"
          />
        </div>
      </a>
    </article>
  );
};

export default ContenedorFedeJuan;
