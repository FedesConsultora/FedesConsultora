// src/components/Nosotros/LideresSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LideresSection = () => {
  const { t } = useTranslation();

  return (
    <section className="lideresSection">
      {/* Encabezado con “LÍDERES” y la línea pequeña */}
      <article className="equipoHeader">
        <p>{t('leaders')}</p>
        <img
          src="https://fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
          alt={t('small_line')}
          loading="lazy"
        />
      </article>
      
      {/* Contenedor del título + fotos */}
      <article className="equipoInfo">
        {/* Ejemplo de texto partido para resaltar algunas palabras */}
        <h2 className="equipoTitulo">
          {t('leaders_text_part1')}{' '}
          <strong>{t('leaders_text_strong1')}</strong>{' '}
          {t('leaders_text_part2')}{' '}
          <strong>{t('leaders_text_strong2')}</strong>
        </h2>

        <article className="equipoFotos">
          <div className="colUno">
            {/* Mechi */}
            <div className="mechi">
              <img
                className="fotoLider"
                src="https://fedesagency.com/fedes-consultora/landing/foto_mechi.webp"
                alt="Mercedes Savickas"
                loading="lazy"
              />
              <div className="nombreContainer">
                <h3>MERCEDES</h3>
                <h3 className="apellido">SAVICKAS</h3>
                <p>CMO</p>
                <img
                  className='recuadro'
                  src="https://fedesagency.com/fedes-consultora/landing/recuadro_semicircular_negro.png"
                  alt="Recuadro SemiCircular"
                  loading="lazy"
                />
                <a href="https://www.linkedin.com/in/maria-mercedes-savickas-354073a/">
                  <div className="contenedorBotonLinkedin">
                    <p className="textoLinkedin">VIEW LINKEDIN</p>
                    <img
                      className="imagenFlecha"
                      src="https://fedesagency.com/fedes-consultora/landing/flechaDerechaNegra.png"
                      alt="Flecha Derecha"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Romi */}
            <div className="romi">
              <img
                className="fotoLider"
                src="https://fedesagency.com/fedes-consultora/landing/foto_romi.webp"
                alt="Romina Albanesi"
                loading="lazy"
              />
              <div className="nombreContainer">
                <h3>ROMINA</h3>
                <h3 className="apellido">ALBANESI</h3>
                <p>Líder de Comunicación</p>
                <img
                  className='recuadro'
                  src="https://fedesagency.com/fedes-consultora/landing/recuadro_semicircular_negro.png"
                  alt="Recuadro SemiCircular"
                  loading="lazy"
                />
                <a href="https://www.linkedin.com/in/rominaalbanesi/">
                  <div className="contenedorBotonLinkedin">
                    <p className="textoLinkedin">VIEW LINKEDIN</p>
                    <img
                      className="imagenFlecha"
                      src="https://fedesagency.com/fedes-consultora/landing/flechaDerechaNegra.png"
                      alt="Flecha Derecha"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="colDos">
            {/* Sofi */}
            <div className="sofi">
              <img
                className="fotoLider"
                src="https://fedesagency.com/fedes-consultora/landing/foto_sofi.webp"
                alt="Sofía Pietropaoli"
                loading="lazy"
              />
              <div className="nombreContainer">
                <h3>SOFÍA</h3>
                <h3 className="apellido">PIETROPAOLI</h3>
                <p>Líder de Diseño</p>
                <img
                  className='recuadro'
                  src="https://fedesagency.com/fedes-consultora/landing/recuadro_semicircular_negro.png"
                  alt="Recuadro SemiCircular"
                  loading="lazy"
                />
                <a href="https://www.linkedin.com/in/sofia-pietropaoli-9a51b7190/">
                  <div className="contenedorBotonLinkedin">
                    <p className="textoLinkedin">VIEW LINKEDIN</p>
                    <img
                      className="imagenFlecha"
                      src="https://fedesagency.com/fedes-consultora/landing/flechaDerechaNegra.png"
                      alt="Flecha Derecha"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Flor */}
            <div className="flor">
              <img
              
                className="fotoLider"
                src="https://fedesagency.com/fedes-consultora/landing/foto_flor.webp"
                alt="Florencia Marchesotti"
                loading="lazy"
              />
              <div className="nombreContainer">
                <h3>FLORENCIA</h3>
                <h3 className="apellido">MARCHESOTTI</h3>
                <p>Líder de Proyectos</p>
                <img
                  className='recuadro'
                  src="https://fedesagency.com/fedes-consultora/landing/recuadro_semicircular_negro.png"
                  alt="Recuadro SemiCircular"
                  loading="lazy"
                />
                <a href="https://www.linkedin.com/in/florencia-marchesotti-7570a3212/">
                  <div className="contenedorBotonLinkedin">
                    <p className="textoLinkedin">VIEW LINKEDIN</p>
                    <img
                      className="imagenFlecha"
                      src="https://fedesagency.com/fedes-consultora/landing/flechaDerechaNegra.png"
                      alt="Flecha Derecha"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default LideresSection;
