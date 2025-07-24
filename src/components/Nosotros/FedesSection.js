import React from 'react'
import { useTranslation } from 'react-i18next';

const FedesSection = () => {
     const { t } = useTranslation();
  return (
    <div className='fedesInfo'>
        <article className="contenedorFedeJuan">
            <div className="nombreContainer">
                <h3>FEDERICO JUAN</h3>
                <p>CoFounder y CGO</p>
                <img
                src="https://fedes.ai/fedes-consultora/landing/recuadro_semicircular.svg"
                alt={t('semi_circular_frame')}
                loading="lazy"
                />
            </div>
            <ul className="listaFede">
                <li>{t('fede_juan_1')}</li>
                <li>{t('fede_juan_2')}</li>
                <li>{t('fede_juan_3')}</li>
                <li>{t('fede_juan_4')}</li>
                <li>{t('fede_juan_5')}</li>
            </ul>
            <a href="https://www.linkedin.com/in/fede-juan/">
                <div className="contenedorBotonLinkedin">
                {t('view_linkedin')}
                <img
                    src="https://fedes.ai/fedes-consultora/landing/flechaDerecha.svg"
                    alt={t('arrow_right')}
                    loading="lazy"
                />
                </div>
            </a>
        </article>
        <article className="contenedorFedeChironi">
            <div className="nombreContainer">
                <h3>FEDERICO CHIRONI</h3>
                <p>CoFounder y CEO</p>
                <img
                src="https://fedes.ai/fedes-consultora/landing/recuadro_semicircular.svg"
                alt={t('semi_circular_frame')}
                loading="lazy"
                />
            </div>
            <ul className="listaFede">
                <li>{t('fede_chironi_1')}</li>
                <li>{t('fede_chironi_2')}</li>
                <li>{t('fede_chironi_3')}</li>
                <li>{t('fede_chironi_4')}</li>
            </ul>
            <a href="https://www.linkedin.com/in/federicochironi/">
                <div className="contenedorBotonLinkedin">
                {t('view_linkedin')}
                <img
                    src="https://fedes.ai/fedes-consultora/landing/flechaDerecha.svg"
                    alt={t('arrow_right')}
                    loading="lazy"
                />
                </div>
            </a>
        </article>
    </div>
  )
}

export default FedesSection