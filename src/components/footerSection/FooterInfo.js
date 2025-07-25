import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar hook para la traducción

const FooterInfo = () => {
  const { t } = useTranslation(); // Inicializar hook de traducción

  return (
    <article className="dudas">
      <img
        src="https://fedes.ai/fedes-consultora/landing/lineaBlancaHorizontal.svg"
        alt="Linea Blanca Horizontal"
      />
      <p className="charlemos">{t('lets_chat')}</p>
      <p className='parrafoCorto'>
        {t('still')}<span className="extra-bold"> {t('questions')}</span>
      </p>
      <p className="parrafoLargo">
        {t('footer_paragraph')}
      </p>
      <div className="buttons_container">
          <a href="https://fedeshub.odoo.com/appointment/4">
            <button className="button1">{t('schedule_meeting')}</button>
          </a>
          <a
            href="https://wa.me/+5492213092529?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20que%20ofrecen%20en%20Fedes%20Consultora."
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="button2">
            <img
              src="https://fedes.ai/fedes-consultora/landing/WhatsappLogo.svg"
              alt="Whatsapp logo of Fedes Consultora"
            />
            <p className='parrafoMensaje'>{t('send_message')}</p>
          </button>
        </a>
      </div>
    </article>
  );
};

export default FooterInfo;
