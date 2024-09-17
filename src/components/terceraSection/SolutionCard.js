// src/components/terceraSection/SolutionCard.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const SolutionCard = ({ title, icon, description, number, isExpanded, onExpand }) => {
  const { t } = useTranslation(); // Hook para usar traducción

  return (
    <div className={`solution-item ${number} ${isExpanded ? 'expanded' : ''}`} onClick={onExpand}>
      <div className="contenedorIcono">
        <img className="iconos" src={icon} alt={`Icono de ${title} de Fedes Consultora`} />
      </div>

      <article className="card">
        <h3>{title}</h3>
        <div className={`details-section ${isExpanded ? 'expanded' : ''}`}>
          <p className="solution-paragraph">{description}</p>
          <article className="verDetalles">
            <p className="textoVerDetalles">{t('view_details')}</p>
            <img src="https://fedesagency.com/fedes-consultora/landing/flechaDerecha.svg" alt="Right arrow" />
          </article>
        </div>
      </article>
    </div>
  );
};

export default SolutionCard;
