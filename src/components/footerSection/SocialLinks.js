import React from 'react';
import { useTranslation } from 'react-i18next';

const SocialLinks = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <article id="contactoScroll" className="redesSociales">
      <p>
        <span className="extra-bold" data-text={t('follow_us')}>{t('follow_us')}</span> {/* Traducción */}
        {t('on')}
      </p>
      <div className="redesSocialesContainer">
        <a href="https://www.facebook.com/fedesagencyok">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/youtube_blanco.png"
            alt="Facebook logo de Fedes Consultora"
            className="default youtube"
            loading="lazy"
          />
          <img
            src="https://fedesagency.com/fedes-consultora/landing/youtube_color.png"
            alt="Facebook logo de Fedes Consultora"
            className="hover youtube"
            loading="lazy"
          />
        </a>
        <a href="https://www.instagram.com/fedesconsultora/">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/instagram_blanco.svg"
            alt="Instagram logo de Fedes Consultora"
            className="default"
            loading="lazy"
          />
          <img
            src="https://fedesagency.com/fedes-consultora/landing/instagram_color.svg"
            alt="Instagram logo de Fedes Consultora"
            className="hover"
            loading="lazy"
          />
        </a>
        <a href="https://www.linkedin.com/company/fedesagency/">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/linkedin_blanco.svg"
            alt="LinkedIn logo de Fedes Consultora"
            className="default"
            loading="lazy"
          />
          <img
            src="https://fedesagency.com/fedes-consultora/landing/LinkedIn_color.svg"
            alt="LinkedIn logo de Fedes Consultora"
            className="hover"
            loading="lazy"
          />
        </a>
      </div>
    </article>
  );
};

export default SocialLinks;
