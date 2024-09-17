import React from 'react';
import { useTranslation } from 'react-i18next';

const PrensaHeader = () => {
  const { t } = useTranslation(); 

  return (
    <article className="contenedorPrensa">
      <h3 className="titulo_principal">{t('media')}</h3>
      <h2 className="text_general">
        {t('our_footprint')} <span className="extra-bold">{t('media_voice')}</span> <span className="extra-bold">{t('the_media')}</span>
      </h2>
      <p className="parrafo_general">{t('media_description')}</p>
    </article>
  );
};

export default PrensaHeader;
