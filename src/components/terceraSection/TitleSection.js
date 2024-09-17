// src/components/terceraSection/TitleSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const TitleSection = () => {
  const { t } = useTranslation(); // Hook para usar traducción

  return (
    <>
      <img
        src="https://fedesagency.com/fedes-consultora/landing/lineaCorta.svg"
        alt="linea divisoria de Fedes Consultora"
        loading="lazy"
      />
      <p className="tituloSoluciones" id="servicios_scroll">
        {t('our_solutions')}
      </p>
      <p className="textoSoluciones">
        {t('innovative_solutions')}
        <span className="extra-bold"> {t('tangible_results')}</span> {t('measurable_results')}
      </p>
    </>
  );
};

export default TitleSection;
