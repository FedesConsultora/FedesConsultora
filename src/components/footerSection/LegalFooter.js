import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const LegalFooter = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const langMapping = {
    es: {
      imgSrc: 'https://fedes.ai/fedes-consultora/landing/bandera_argentina.svg',
      text: 'ES'
    },
    en: {
      imgSrc: 'https://fedes.ai/fedes-consultora/landing/bandera_estados_unidos.svg',
      text: 'EN'
    }
  };

  return (
    <section className="legalFooter">
      <div className="logoEidioma">
        <img
          className="logo_fedes"
          src="https://fedes.ai/fedes-consultora/landing/logoBlanco.png"
          alt="Small logo of Fedes Consultora"
          loading="lazy"
        />
        <div className="dropdown js_language_selector d-print-none">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="languageDropdown"
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div>
              <img
                id="currentFlag"
                className="flag o_lang_flag"
                src={langMapping[i18n.language]?.imgSrc || langMapping.es.imgSrc}
                alt="Current Language"
                height="20"
              />
              <span id="currentLang">{langMapping[i18n.language]?.text || 'ES'}</span>
              <img
                className="arrow"
                src="https://fedes.ai/fedes-consultora/landing/flecha_abajo_blanca.svg"
                alt="Arrow"
                height="20"
              />
            </div>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button className="dropdown-item" onClick={() => changeLanguage('es')}>
                  <img
                    className="arg"
                    src={langMapping.es.imgSrc}
                    alt="ES"
                    height="20"
                  />
                  Español
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => changeLanguage('en')}>
                  <img
                    className="o_lang_flag"
                    src={langMapping.en.imgSrc}
                    alt="EN"
                    height="20"
                  />
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="legalLinks">
        <article className='legalLinksContainer'>
          <a href="/politica-de-privacidad" className="legalLink">Política de Privacidad</a>
          <span className="separator">|</span>
          <a href="/terminos-y-condiciones" className="legalLink">Términos y Condiciones</a>
        </article>
        
        <p>© 2025 | FEDES Consultora - {t('footer_message')}</p> 
      </div>
    </section>
  );
};

export default LegalFooter;
