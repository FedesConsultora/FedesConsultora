// src/components/HeaderInfoSection.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción

const HeaderInfoSection = () => {
  const { t } = useTranslation(); // Usamos el hook de traducción

  return (
    <section className="header_info">
      <article className="text_container">
        <h1>
          <span className="titulo_secundario">{t('unlock_potential')}</span><br />
          <span className="titulo_principal">{t('business_potential')}</span><br />
          <span className="titulo_secundario2">{t('business_growth')}</span>
        </h1>
        <p>
          {t('header_paragraph')}
        </p>
        <div className="buttons_container">
          <a href="https://fedeshub.odoo.com/appointment/4">
            <button className="button1">{t('schedule_meeting')}</button>
          </a>
        </div>
      </article>
      <article className="imgHeader">
        <img 
          src="https://fedesagency.com/fedes-consultora/landing/fotoRedondeada2.webp" 
          alt="Foto redondeada de Fedes Consultora" 
          loading="lazy" 
        />
      </article>
    </section>
  );
};

export default HeaderInfoSection;
