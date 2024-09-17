import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NotaItem = ({ imgSrc, altText, titulo, texto, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const handleItemClick = (e) => {
    if (window.innerWidth < 1030) {
      e.preventDefault();
      setIsExpanded(!isExpanded); 
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1030) {
      setIsExpanded(true); 
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1030) {
      setIsExpanded(false);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`carousel-item ${isExpanded ? 'expanded' : ''}`}
      onClick={handleItemClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgSrc} alt={altText} className="img" loading="lazy" />
      <h3 className="tituloNota">{titulo}</h3>

      <div className={`overlayNotas ${isExpanded ? 'show' : ''}`}>
        <div className="texto-overlay">
          <p>{texto}</p>
        </div>
        <div className="ver-nota">
          <p>{t('read_more')}</p>
          <img className="flechaDerecha" src="https://fedesagency.com/fedes-consultora/landing/flechaDerecha.svg" alt="Right arrow" />
        </div>
      </div>
    </a>
  );
};

export default NotaItem;
