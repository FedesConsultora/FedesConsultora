import React from 'react';
import { useTranslation } from 'react-i18next';

const SocialLinks = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <article id="contactoScroll" className="redesSociales">
      <p>
        <h3 className="extra-bold" data-text={t('follow_us')}>{t('follow_us')}</h3> {/* Traducción */}
        {t('on')}
      </p>
      <div className="redesSocialesContainer">
        <a href="https://www.facebook.com/fedesagencyok" target="_blank" rel="noopener noreferrer">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/facebook_blanco.svg"
            alt="Facebook logo"
            className="default"
            loading="lazy"
          />
          <img
            src="https://fedesagency.com/fedes-consultora/landing/facebook_color.svg"
            alt="Facebook logo"
            className="hover"
            loading="lazy"
          />
        </a>
        <a href="https://www.instagram.com/fedesconsultora/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/instagram_blanco.svg"
            alt="Instagram logo"
            className="default"
            loading="lazy"
          />
          <img
            src="https://fedesagency.com/fedes-consultora/landing/instagram_color.svg"
            alt="Instagram logo"
            className="hover"
            loading="lazy"
          />
        </a>
        <a href="https://www.linkedin.com/company/fedesagency/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/linkedin_blanco.svg"
            alt="LinkedIn logo"
            className="default"
            loading="lazy"
          />
          <img
            src="https://fedesagency.com/fedes-consultora/landing/LinkedIn_color.svg"
            alt="LinkedIn logo"
            className="hover"
            loading="lazy"
          />
        </a>
      </div>
    </article>
  );
};

export default SocialLinks;
