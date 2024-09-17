// src/components/Statistics.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation(); // Hook para usar traducción

  return (
    <article className="sliders_container">
      <section className="unidadContainer uno">
        <h2 className="textoAfuera primero">
          <span className="counter" data-target="3" data-speed="30000">3</span>
          <strong>{t('years_boosting')}</strong>
        </h2>
        <div className="slider1">
          <h2 className="textoAdentro" dangerouslySetInnerHTML={{ __html: t('boosting_businesses') }} />
        </div>
      </section>
      <section className="unidadContainer dos">
        <h2 className="textoAfuera segundo">
          <span className="counter" data-target="50" data-speed="1000">50</span>
        </h2>
        <div className="slider2">
          <h2 className="textoAdentro" dangerouslySetInnerHTML={{ __html: t('projects_boosted') }} />
        </div>
      </section>
      <section className="unidadContainer tres">
        <h2 className="textoAfuera tercero">
          <span className="counter" data-target="60" data-speed="1000">60</span>
          <span className="porcentaje">%</span>
        </h2>
        <div className="slider3">
          <h2 className="textoAdentro" dangerouslySetInnerHTML={{ __html: t('market_leaders') }} />
        </div>
      </section>
    </article>
  );
};

export default Statistics;
