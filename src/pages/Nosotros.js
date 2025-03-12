// src/pages/Nosotros.js
import React from 'react';
import { useTranslation } from 'react-i18next';

// Importamos los 5 componentes:
import FedesSection from '../components/Nosotros/FedesSection';
import ContenedorFedeJuan from '../components/Nosotros/ContenedorFedeJuan';
import ContenedorFedeChironi from '../components/Nosotros/ContenedorFedeChironi';
import ImagenFedes from '../components/Nosotros/ImagenFedes';

// Hook para chequear si estamos en desktop
import useIsDesktop from '../hooks/useIsDesktop';
import LideresSection from '../components/Nosotros/LideresSection';

const Nosotros = () => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();

  // Función para hacer scroll suave al footer
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="nosotrosContainer">
      <section className="segundaSection">
        <article className="informacionContainer">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/lineaCorta.svg"
            alt={t('small_line')}
            loading="lazy"
          />
          <div className="minilogo-container">
            <p className="texto_minilogo">
              {t('why')} &nbsp;
              <img
                src="https://fedesagency.com/fedes-consultora/landing/mini_logo.svg"
                alt={t('small_logo_fedes')}
                loading="lazy"
              />?
            </p>
          </div>
          <div className="parrafo-container">
            <p className="parrafo-fedes">
              {t('united_by_name_part1')}{' '}
              <span className="extra-bold">{t('united_by_name_nombre')}</span>,{' '}
              {t('united_by_name_part2')}{' '}
              <span className="extra-bold">{t('united_by_name_pasion')}</span>{' '}
              {t('united_by_name_part3')}{' '}
              <span className="extra-bold">{t('united_by_name_compromiso')}</span>{' '}
              {t('united_by_name_part4')}
            </p>
            <p className="parrafo-extra">
              {t('digital_natives')}
            </p>
          </div>
          <div className="buttons_container">
            <button className="button1" onClick={scrollToFooter}>{t('learn_more')}</button>
          </div>
        </article>
      </section>

      {/* ========== Sección Fedes ========== */}
      <section className="fedesSection">
        {isDesktop ? (
          /* Vista desktop: FEDES SEPARADOS + IMAGEN AL CENTRO */
          <>
            <ContenedorFedeJuan />
            <ImagenFedes />
            <ContenedorFedeChironi />
          </>
        ) : (
          /* Vista móvil/tablet: FedesSection + ImagenFedes debajo */
          <>
            <FedesSection />
            <ImagenFedes />
          </>
        )}
      </section>

      <LideresSection />
    </main>
  );
};

export default Nosotros;
