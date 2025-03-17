// src/pages/Servicios.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiciosCarrusel from '../components/Servicios/ServiciosCarrusel';

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="terceraSection">
        <article className="contenedorTitulos">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/lineaCorta.svg"
            alt="línea divisoria"
            loading="lazy"
          />
          <p className="tituloSoluciones" id="servicios_scroll">
            &nbsp;{t('our_solutions')}
          </p>
          <p className="textoSoluciones">
            {t('innovative_solutions')}{' '}
            <span className="extra-bold">{t('tangible_results')}</span>{' '}
            <span className="extra-bold">{t('measurable_results')}</span>
          </p>
        </article>

        {/* Carrusel de servicios */}
        <ServiciosCarrusel />
      </section>
    </main>
  );
};

export default Servicios;
