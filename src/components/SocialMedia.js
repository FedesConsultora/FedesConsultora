// src/components/SocialMedia.js
import React from 'react';

const SocialMedia = ({ isHome }) => {
  // Rutas blancas
  const youtubeWhite = 'https://fedesconsultora.com/fedes-consultora/landing/youtube_blanco.png';
  const instagramWhite = 'https://fedesconsultora.com/fedes-consultora/landing/instagram_blanco.svg';
  const linkedinWhite = 'https://fedesconsultora.com/fedes-consultora/landing/linkedin_blanco.svg';

  // Rutas negras
  const youtubeBlack = 'https://fedesconsultora.com/fedes-consultora/landing/youtube_negro.png';
  const instagramBlack = 'https://fedesconsultora.com/fedes-consultora/privacidad/instagramIconBlack.svg';
  const linkedinBlack = 'https://fedesconsultora.com/fedes-consultora/privacidad/linkedinIconBlack.svg';

  // Rutas a color (para hover)
  const youtubeColor = 'https://fedesconsultora.com/fedes-consultora/landing/youtube_color.png';
  const instagramColor = 'https://fedesconsultora.com/fedes-consultora/landing/instagram_color.svg';
  const linkedinColor = 'https://fedesconsultora.com/fedes-consultora/landing/LinkedIn_color.svg';

  return (
    <article className="redesSociales">
      <div className="redesSocialesContainer">
        <a href="https://www.youtube.com/@fedesconsultora">
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
