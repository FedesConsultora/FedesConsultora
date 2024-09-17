// src/components/terceraSection/TerceraSection.js
import React, { useState } from 'react';
import TitleSection from './TitleSection';
import SolutionCard from './SolutionCard';
import { useTranslation } from 'react-i18next';

const TerceraSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const { t } = useTranslation(); // Hook para usar traducción

  const handleExpand = (cardNumber) => {
    setExpandedCard(expandedCard === cardNumber ? null : cardNumber);
  };

  return (
    <section className="terceraSection">
      <article className="contenedorTitulos">
        <TitleSection />
      </article>
      <article className="contenedorSoluciones">
        <img className="imagenCamino" src="https://fedesagency.com/fedes-consultora/landing/imagenCamino.svg" alt="Path image of Fedes" loading="lazy"/>
        <SolutionCard
          title={t('positioning_title')}
          description={t('positioning_desc')}
          icon="https://fedesagency.com/fedes-consultora/landing/iconoPosicionamiento.svg"
          number="uno"
          isExpanded={expandedCard === 'uno'}
          onExpand={() => handleExpand('uno')}
        />
        <SolutionCard
          title={t('performance_title')}
          description={t('performance_desc')}
          icon="https://fedesagency.com/fedes-consultora/landing/iconoPerformance.svg"
          number="dos"
          isExpanded={expandedCard === 'dos'}
          onExpand={() => handleExpand('dos')}
        />
        <SolutionCard
          title={t('consulting_title')}
          description={t('consulting_desc')}
          icon="https://fedesagency.com/fedes-consultora/landing/iconoConsultoria.svg"
          number="tres"
          isExpanded={expandedCard === 'tres'}
          onExpand={() => handleExpand('tres')}
        />
      </article>
    </section>
  );
};

export default TerceraSection;
