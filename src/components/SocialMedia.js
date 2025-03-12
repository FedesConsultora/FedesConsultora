// src/components/SocialMedia.js
import React from 'react';

const SocialMedia = () => {
  return (
    <article className="redesSociales">
      <div className='redesSocialesContainer'>
        <a href="https://www.facebook.com/fedesagencyok">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/youtube_negro.png"
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
            src="https://fedesagency.com/fedes-consultora/privacidad/instagramIconBlack.svg"
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
            src="https://fedesagency.com/fedes-consultora/privacidad/linkedinIconBlack.svg"
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

export default SocialMedia;
