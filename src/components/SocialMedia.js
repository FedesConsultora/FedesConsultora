// src/components/SocialMedia.js
import React from 'react';

const SocialMedia = ({ isHome }) => {
  // Rutas blancas
  const youtubeWhite = 'https://fedesagency.com/fedes-consultora/landing/youtube_blanco.png';
  const instagramWhite = 'https://fedesagency.com/fedes-consultora/landing/instagram_blanco.svg';
  const linkedinWhite = 'https://fedesagency.com/fedes-consultora/landing/linkedin_blanco.svg';

  // Rutas negras
  const youtubeBlack = 'https://fedesagency.com/fedes-consultora/landing/youtube_negro.png';
  const instagramBlack = 'https://fedesagency.com/fedes-consultora/privacidad/instagramIconBlack.svg';
  const linkedinBlack = 'https://fedesagency.com/fedes-consultora/privacidad/linkedinIconBlack.svg';

  // Rutas a color (para hover)
  const youtubeColor = 'https://fedesagency.com/fedes-consultora/landing/youtube_color.png';
  const instagramColor = 'https://fedesagency.com/fedes-consultora/landing/instagram_color.svg';
  const linkedinColor = 'https://fedesagency.com/fedes-consultora/landing/LinkedIn_color.svg';

  return (
    <article className="redesSociales">
      <div className="redesSocialesContainer">
        <a href="https://www.facebook.com/fedesagencyok">
          {/* Ternario para default (isHome? blanco : negro) */}
          <img
            src={isHome ? youtubeWhite : youtubeBlack}
            alt="YouTube logo de Fedes Consultora"
            className="default youtube"
            loading="lazy"
          />
          <img
            src={youtubeColor}
            alt="YouTube logo de Fedes Consultora"
            className="hover youtube"
            loading="lazy"
          />
        </a>

        <a href="https://www.instagram.com/fedesconsultora/">
          <img
            src={isHome ? instagramWhite : instagramBlack}
            alt="Instagram logo de Fedes Consultora"
            className="default"
            loading="lazy"
          />
          <img
            src={instagramColor}
            alt="Instagram logo de Fedes Consultora"
            className="hover"
            loading="lazy"
          />
        </a>

        <a href="https://www.linkedin.com/company/fedesagency/">
          <img
            src={isHome ? linkedinWhite : linkedinBlack}
            alt="LinkedIn logo de Fedes Consultora"
            className="default"
            loading="lazy"
          />
          <img
            src={linkedinColor}
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
