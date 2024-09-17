// src/components/ContenedorMarcas.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContenedorMarcas = () => {
  const { t } = useTranslation();

  return (
    <article className="contenedorMarcas">
      <img src="https://fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg" alt="Linea negra pequeña" loading="lazy"/>
      <h5 id="casoDeExitoScroll">{t('success_cases')}</h5>
      <p className="marcasTexto">
        {t('trusted_by_brands')}
        <img
          src="https://fedesagency.com/fedes-consultora/landing/logoFedesNegroChico.svg"
          alt="Logo Negro de Fedes Consultora"
          loading="lazy"
        />
      </p>
      <p>
        {t('collaborations_desc')}
      </p>
    </article>
  );
};

export default ContenedorMarcas;
