import React from 'react';
import { useTranslation } from 'react-i18next';

const CarouselItem = ({ imgSrc, altText, overlayClass, logoSrc, logoAlt, pdfUrl }) => {
  const { t } = useTranslation(); 

  return (
    <div className="carousel-item">
      <img src={imgSrc} alt={altText} className="img" loading="lazy" />
      <div className={`overlay ${overlayClass}`}>
        <div className="texto-overlay">
          <img className={`logo_${overlayClass}`} src={logoSrc} alt={logoAlt} loading="lazy" />
        </div>
        <div className="ver-caso" data-pdf={pdfUrl}>
          <p>{t('view_case_study')}</p>
          <img src="https://fedesagency.com/fedes-consultora/landing/flechaDerecha.svg" alt="Right arrow" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;