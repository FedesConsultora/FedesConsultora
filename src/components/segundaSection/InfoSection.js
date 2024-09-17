// src/components/InfoSection.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import Statistics from './Statistics';

const InfoSection = () => {
  const { t } = useTranslation(); // Usamos el hook de traducción

  return (
    <section>
      <article className="informacionContainer" id="sobreFedes_scroll">
        <img
          src="https://fedesagency.com/fedes-consultora/landing/lineaCorta.svg"
          alt="línea pequeña"
          loading="lazy"
        />
        <div className="minilogo-container">
          <p className="texto_minilogo">
            {t('why_fedes')} <img
              src="https://fedesagency.com/fedes-consultora/landing/mini_logo.svg"
              alt="logo pequeño fedes"
              loading="lazy"
            />?
          </p>
        </div>
        <div className="parrafo-container">
          <p className="parrafo-fedes">
            {t('joined_by')} <span className="extra-bold">{t('name')}</span>, 
            <span className="extra-bold"> {t('passion')}</span>, 
            {t('and_the')} <span className="extra-bold">{t('commitment')}</span> {t('your_success')}
          </p>
          <p className="parrafo-extra">
            {t('digital_natives')}
          </p>
        </div>
        <Statistics />
        <div className="buttons_container">
          <button className="button1">{t('learn_more')}</button>
        </div>
      </article>
    </section>
  );
};

export default InfoSection;
