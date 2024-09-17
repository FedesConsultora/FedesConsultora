// src/components/ContenedorAccion.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContenedorAccion = () => {
  const { t } = useTranslation();

  return (
    <article className="contenedorAccion">
      <div>
        <h3>{t('not_here_yet')}</h3>
        <p>{t('make_it_happen')}</p>
      </div>
      <div className="buttons_container">
        <a href="https://www.fedesconsultora.com/appointment">
          <button className="button1">{t('schedule_meeting')}</button>
        </a>
      </div>
    </article>
  );
};

export default ContenedorAccion;
