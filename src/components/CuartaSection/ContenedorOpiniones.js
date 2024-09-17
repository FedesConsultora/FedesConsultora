// src/components/ContenedorOpiniones.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card';

const ContenedorOpiniones = () => {
  const { t } = useTranslation();

  return (
    <article className="contenedorOpiniones">
      <p>
        {t('what_clients_say')} <h3>{t('our_clients')}</h3>
      </p>
      <section className="cardContainer">
        <Card
          clientName="HERNAN BORREGO"
          clientLogo="https://fedesagency.com/fedes-consultora/landing/tucanLogo.svg"
          clientImage="https://fedesagency.com/fedes-consultora/landing/hernanBorregoEj.jpg"
          feedback={t('client_feedback_1')}
        />
        <Card
          clientName="AGUSTIN PETERS PUHL"
          clientLogo="https://fedesagency.com/fedes-consultora/landing/PetersPuhlLogo2.svg"
          clientImage="https://fedesagency.com/fedes-consultora/landing/ejemploAgusPeterPuhl.jpg"
          feedback={t('client_feedback_2')}
        />
        <Card
          clientName="DANIEL OTAMENDI"
          clientLogo="https://fedesagency.com/fedes-consultora/landing/kronenLogo.svg"
          clientImage="https://fedesagency.com/fedes-consultora/landing/DanielOtamendiEjemplo.jpg"
          feedback={t('client_feedback_3')}
        />
      </section>
    </article>
  );
};

export default ContenedorOpiniones;
