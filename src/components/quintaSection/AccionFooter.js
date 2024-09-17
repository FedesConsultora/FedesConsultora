import React from 'react';
import { useTranslation } from 'react-i18next';

const AccionFooter = () => {
  const { t } = useTranslation(); 

  return (
    <article className="contenedorAccion">
      <p>{t('stay_tuned')}</p>
    </article>
  );
};

export default AccionFooter;
