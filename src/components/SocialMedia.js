// src/components/SocialMedia.js
import React from 'react';

const SocialMedia = () => {
  return (
    <article className="redesSociales">
      <a href="https://www.facebook.com/fedesagencyok">
        <img
          src="https://fedesagency.com/fedes-consultora/landing/facebook_blanco.svg"
          alt="Facebook logo de Fedes Consultora"
          className="default"
          loading="lazy"
        />
        <img
          src="https://fedesagency.com/fedes-consultora/landing/facebook_color.svg"
          alt="Facebook logo de Fedes Consultora"
          className="hover"
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
    </article>
  );
};

export default SocialMedia;
